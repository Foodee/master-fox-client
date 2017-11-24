import ResourceClasses from './resources/resources';
import Resource from './resources/resource';
import { dasherize, underscore } from 'inflected'
import fetch from 'cross-fetch';

function extractJRObject(data, included) {
  const id = data.id;
  const type = data.type;
  const attributes = data.attributes;

  const resourceKlass = ResourceClasses[type] || Resource;

  const relationships = Object.entries(data.relationships || {})
    .reduce((acc, [key, value]) => {

      if (value.data !== undefined) {

        let related;

        // included relationships are either to one or to many
        if (Array.isArray(value.data)) {
          related = value.data.map((r) => extractJRObject(findRelationship(included, r)), included);
        }
        else {
          related = extractJRObject(findRelationship(included, value.data), included);
        }

        acc[key] = related;
      }

      return acc;
    }, {});

  // look this up in the class registry
  const ret = new resourceKlass();

  ret.id = id;
  ret.type = type;
  ret.attributes = attributes;
  ret.relationships = relationships;

  return ret;
}

function findRelationship(included, {type, id}) {
  return included.find((_) => _.type === type && _.id === id);
}

/**
 * @class ResourceDao
 */
export class ResourceDao {

  /**
   * @param {JRClient} client the JSON-API aware client
   * @param {string} route the base path for the resource (eg: Restaurant -> restaurants)
   */
  constructor(client, route) {
    this._client = client;
    this._route = route;
  }

  from(id) {
    this.relationshipDao.id = id;

    return this.relationshipDao;
  }

  /**
   * Gets a single resource from by id
   *
   * @param {string|number} id
   * @param {{include: string}} options
   * @return Promise<T>
   */
  get(id, options = {}) {
    return this._client.get(`${this._route}/${id}`, options.include);
  }

  /**
   * Index a collection of resources searched by options
   *
   * @param {{include: string, filter: {}}} options
   * @return Promise<T[]>
   */
  index(options = {}) {
    return this._client.index(this._route, options.include, options.filter, options.sort, options.page);
  }

  /**
   * Create a new resource
   *
   * @param {T} resource
   * @param {{include: string}} options
   * @return Promise<T>
   */
  create(resource, options = {}) {
    return this._client.post(this._route, resource.toJR(), options.include);
  }

  /**
   * Updates the provided resource
   *
   * @param {T} resource
   * @param {{include: string}} options
   * @return Promise<T>
   */
  update(resource, options = {}) {

    if (!resource.id) {
      throw new Error('You cannot update a resource without an id')
    }

    return this._client.patch(`${this._route}/${resource.id}`, resource.toJR(), options.include);
  }

}

/**
 * @class RelationshipDao
 */
export class RelationshipDao {

  constructor(client, parentRoute) {
    this._client = client;
    this._parentRoute = parentRoute;

    this.id = null;
  }

  set id(id) {
    this._id = id;
    return this
  }

  toOne(childRoute, options = {}) {
    return this._client.get(`${this._parentRoute}/${this._id}/${childRoute}`, options.include);
  }

  toMany(childRoute, options = {}) {
    return this._client.index(`${this._parentRoute}/${this._id}/${childRoute}`, options.include, options.filter, options.sort, options.page);
  }

}


/**
 * @class
 * @template T
 */
export class IndexResult {

  /**
   * @param {T[]} records
   * @param {Object} meta
   * @param {Object} page
   */
  constructor(records, meta, page) {
    this.records = records;

    // allow brace array access
    this.records.forEach((record, index) => this[index] = record );

    // TODO: replace this
    this.page = page || {
      offset: 0,
      limit: 20
    };
    this.meta = meta;
    this.index = 0;
  }

  /**
   * Delegates to the filter function of the contained array
   * @param func
   * @returns {Array.<T>}
   */
  filter(func) {
    return this.records.filter(func);
  }

  /**
   * Delegates to the map function of the contained array
   * @param func
   * @returns {Array.<T>}
   */
  map(func) {
    return this.records.map(func);
  }

  /**
   * Delegates to the every function of the contained array
   * @param func
   * @returns {Array.<T>}
   */
  every(func) {
    return this.records.every(func);
  }

  /**
   * Delegates to the forEach function of the contained array
   * @param func
   * @returns {Array.<T>}
   */
  forEach(func) {
    return this.records.forEach(func);
  }

  /**
   * Delegates to the find function of the contained array
   * @param func
   * @returns {Array.<T>}
   */
  find(func) {
    return this.records.find(func);
  }

  /**
   * Delegates to the reduce function of the contained array
   * @param func
   * @returns {Array.<T>}
   */
  reduce(func, initial) {
    return this.records.reduce(func, initial);
  }

  /**
   * Delegates to the [] function of the contained array
   * @param func
   * @returns {Array.<T>}
   */
  objectAt(index) {
    return this.records[index];
  }

  // mount the iterator on this
  [Symbol.iterator]() {
    return {
      next: () => {
        if (this.index < this.records.length) {
          return {value: this.records[this.index++], done: false};
        } else {
          this.index = 0; //If we would like to iterate over this again without forcing manual update of the index
          return {done: true};
        }
      }
    }
  };

  /**
   * The total length of records on the server
   * @returns {number}
   */
  get total() {
    return this.meta['record-count'];
  }

  /**
   * The length of this result set
   * @returns {number}
   */
  get length() {
    return this.records.length;
  }

  /**
   * Whether or not there are more records on the server that match this set
   * @returns {boolean}
   */
  get hasMore() {
    return this.page.offset + this.page.limit < this.total;
  }

}

/**
 * @class JRClient
 */
export class JRClient {

  constructor(baseUrl, apiKey) {
    this.baseUrl = baseUrl;
    this.apiKey = apiKey;

    this.headers = {
      'Authorization': `Token token="${apiKey}"`,
      'Accept': 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json'
    }
  }

  /**
   * @param uri
   * @param options
   * @returns {Promise.<T>}
   */
  fetchJR(uri, options = {}) {

    const method = options.method || 'GET';
    const body = options.body;
    let include = options.include;
    const filter = options.filter;
    const sort = options.sort;
    const page = options.page;

    let qs = [];

    // Append Filters
    if (include) {
      if (Array.isArray(include)) {
        include = include.join(',');
      }

      qs.push(`include=${include}`)
    }

    // Append Filters
    if (filter) {
      qs = qs.concat(Object.entries(filter).map(([key, value]) => `filter[${dasherize(underscore(key))}]=${value}`));
    }

    // Append Page
    if (page) {
      qs = qs.concat(Object.entries(page).map(([key, value]) => `page[${dasherize(underscore(key))}]=${value}`));
    }

    if (sort) {
      qs.push(`sort=${sort}`)
    }

    qs = qs.length ? '?' + qs.join('&') : '';

    let url = `${this.baseUrl}api/v3/${uri}${qs}`;

    console.log(`${method}: ${url}`);

    return fetch(url, {
      headers: this.headers,
      method: method,
      body: body ? JSON.stringify(body) : body
    })
      .then((response) => {
        return response
          .json()
          .then((body) => {
            // Handle all errors the same
            if (response.status > 299) {
              const errors = body.errors;
              if (errors && errors[0]) {
                throw `${errors[0].title}: ${errors[0].detail}`;
              }
              else {
                throw `${response.status}: something went wrong`;
              }
            }

            return body;
          })
      })
  }


  index(uri, include, filter, sort, page) {
    return this.fetchJR(uri, {
        include: include,
        filter: filter,
        sort: sort,
        page: page
      })
      .then(({data, included, meta}) => new IndexResult(data.map(_ => extractJRObject(_, included)), meta, page));
  }

  get(uri, include) {
    return this.fetchJR(uri, {
        include: include
      })
      .then(({data, included}) => extractJRObject(data, included));
  }

  post(uri, record, include) {
    return this.fetchJR(uri, {
        method: 'POST',
        body: record,
        include: include
      })
      .then(({data, included}) => extractJRObject(data, included));
  }

  patch(uri, record, include) {
    return this.fetchJR(uri, {
        method: 'PATCH',
        body: record,
        include: include
      })
      .then(({data, included}) => extractJRObject(data, included));
  }

  delete(uri) {
    return this.fetchJR(uri, {
      method: 'DELETE',
    })
  }

}
