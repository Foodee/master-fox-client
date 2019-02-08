import ResourceClasses from './resources/resources';
import Resource from './resources/resource';
import { dasherize, underscore } from 'inflected'
import fetch from 'cross-fetch';

export function extractJRObject(data, included = [], registry = {}) {

  if (!data) {
    return null;
  }

  const id = data.id;
  const type = data.type;

  if (registry[data.type] && registry[data.type][data.id]) {
    return registry[data.type][data.id];
  }

  registry[data.type] = registry[data.type] || {};

  const resourceKlass = ResourceClasses[type];
  const attributes = data.attributes;
  const relationships = {one: {}, many: {}};
  const ret = new resourceKlass(id, attributes, relationships.one, relationships.many);

  registry[data.type][id] = ret;

  if (!resourceKlass) {
    throw 'Could not find a resource for type ' + type + ', perhaps the client needs to be regenerated.'
  }

  Object
    .entries(data.relationships || {})
    .forEach(([key, value]) => {

      const relationshipData = value.data;

      if (relationshipData) {
        // included relationships are either to one or to many
        if (Array.isArray(relationshipData)) {
          relationships.many[key] = relationshipData
            .map((nestedRelationshipData) =>
              extractJRObject(findRelationship(included, nestedRelationshipData), included, registry)
            );
        } else {
          relationships.one[key] = extractJRObject(findRelationship(included, relationshipData), included, registry);
        }
      }

    });

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
   * @param {String[] | String} relationships to include
   * @return Promise<T>
   */
  create(resource, options = {include: []}) {
    const include = Array.isArray(options.include) ? options.include : (options.include || '').split(',');
    return this._client.post(this._route, resource.toJSONAPI(include), options.include);
  }

  /**
   * Updates the provided resource
   *
   * @param {T} resource
   * @param {{include: string}} options
   * @return Promise<T>
   */
  update(resource, options = {include: []}) {

    if (!resource.id) {
      throw new Error('You cannot update a resource without an id')
    }

    const include = Array.isArray(options.include) ? options.include : (options.include || '').split(',');

    return this._client.patch(`${this._route}/${resource.id}`, resource.toJSONAPI(include), options.include);
  }


  /**
   * Deletes the provided resource
   *
   * @param {T} resource
   * @param {{include: string}} options
   * @return Promise<T>
   */
  destroy(resource) {

    if (!resource.id) {
      throw new Error('You cannot destroy a resource without an id')
    }

    return this._client.delete(`${this._route}/${resource.id}`);
  }

  action(actionRoute, body = null) {
    return this._client.customPost(`${this._route}/${actionRoute}`, body);
  }

  /**
   * Loads a JR resource object form the class registry
   *
   * TODO: add support for relationships
   * @param {Object} request
   * @return {Resource}
   */
  static fromJSONAPI(request) {
    const data = request.data;
    const {type, id, attributes} = data;
    const klass = ResourceClasses[type];

    return new klass(id, attributes, {});
  }

  static fromJSON(data) {
    //  TODO
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

  action(actionRoute, body = null) {
    return this._client.customPost(`${this._parentRoute}/${this._id}/${actionRoute}`, body);
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
    this.records.forEach((record, index) => this[index] = record);

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
    if (include && include.length > 0) {
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

    return this._doFetch(url, method, this.headers, body);
  }


  _doFetch(url, method, headers, body) {
    return fetch(url, {
      headers: headers,
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
              } else {
                throw `${response.status}: something went wrong`;
              }
            }

            return body;
          })
      });
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

  customPost(uri, body) {
    // TODO: add supoport for query string
    const url = `${this.baseUrl}api/v3/${uri}`;
    return this._doFetch(url, 'POST', this.headers, body)
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
