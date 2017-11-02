import ResourceClasses from './resources/resources';
import Resource from './resources/resource';

const nodeFetch = require('node-fetch');

function extractJRObject(data, included) {
  const id = data.id;
  const type = data.type;
  const attributes = data.attributes;

  const resourceKlass = ResourceClasses[type] || Resource;

  const relationships = Object
    .entries(data.relationships)
    .reduce((acc, [key, value]) => {

      if (value.data !== undefined) {

        let related;

        // included relationships are either to one or to many
        if (Array.isArray(value.data)) {
          related = value.data.map((r) => extractJRObject(findRelationship(included, r)));
        }
        else {
          related = extractJRObject(findRelationship(included, value.data));
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
   * @param {{include: string, filters: {}}} options
   * @return Promise<T[]>
   */
  index(options = {}) {
    return this._client.index(this._route, options.include, options.filters, options.sort, options.page);
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
    return this._client.index(`${this._parentRoute}/${this._id}/${childRoute}`, options.include, options.filters, options.sort, options.page);
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
      qs = qs.concat(Object.keys(filter).map(([key, value]) => `filter[${dasherize(key)}]=${value}`));
    }

    // Append Filters
    if (page) {
      qs = qs.concat(Object.keys(page).map(([key, value]) => `page[${dasherize(key)}]=${value}`));
    }

    if (sort) {
      qs.push(sort)
    }

    qs = qs.length ? '?' + qs.join('&') : '';

    let url = `${this.baseUrl}api/v3/${uri}${qs}`;

    console.log(`${method}: ${url}`)

    return JRClient.fetch(url, {
      headers: this.headers,
      method: method,
      body: body ? JSON.stringify(body) : body
    })
      .then((response) => response.json())
      .catch(console.err)
  }

  // delegate to the polyfill so we're all using the same fetch
  static fetch(url, options) {
    return nodeFetch(url, options);
  }

  index(uri, include, filters, sort, page) {
    return this.fetchJR(uri, {
        include: include,
        filters: filters,
        sort: sort,
        page: page
      })
      .then(({data, included, meta}) => {
        return data.map(_ => extractJRObject(_, included))
      });
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
