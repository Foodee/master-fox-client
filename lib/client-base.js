'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JRClient = exports.IndexResult = exports.RelationshipDao = exports.ResourceDao = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _resources = require('./resources/resources');

var _resources2 = _interopRequireDefault(_resources);

var _resource = require('./resources/resource');

var _resource2 = _interopRequireDefault(_resource);

var _inflected = require('inflected');

var _crossFetch = require('cross-fetch');

var _crossFetch2 = _interopRequireDefault(_crossFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function extractJRObject(data, included) {
  var id = data.id;
  var type = data.type;
  var attributes = data.attributes;

  var resourceKlass = _resources2.default[type] || _resource2.default;

  var relationships = (Object.entries(data.relationships) || []).reduce(function (acc, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    if (value.data !== undefined) {

      var related = void 0;

      // included relationships are either to one or to many
      if (Array.isArray(value.data)) {
        related = value.data.map(function (r) {
          return extractJRObject(findRelationship(included, r));
        }, included);
      } else {
        related = extractJRObject(findRelationship(included, value.data), included);
      }

      acc[key] = related;
    }

    return acc;
  }, {});

  // look this up in the class registry
  var ret = new resourceKlass();

  ret.id = id;
  ret.type = type;
  ret.attributes = attributes;
  ret.relationships = relationships;

  return ret;
}

function findRelationship(included, _ref3) {
  var type = _ref3.type,
      id = _ref3.id;

  return included.find(function (_) {
    return _.type === type && _.id === id;
  });
}

/**
 * @class ResourceDao
 */

var ResourceDao = exports.ResourceDao = function () {

  /**
   * @param {JRClient} client the JSON-API aware client
   * @param {string} route the base path for the resource (eg: Restaurant -> restaurants)
   */
  function ResourceDao(client, route) {
    _classCallCheck(this, ResourceDao);

    this._client = client;
    this._route = route;
  }

  _createClass(ResourceDao, [{
    key: 'from',
    value: function from(id) {
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

  }, {
    key: 'get',
    value: function get(id) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return this._client.get(this._route + '/' + id, options.include);
    }

    /**
     * Index a collection of resources searched by options
     *
     * @param {{include: string, filter: {}}} options
     * @return Promise<T[]>
     */

  }, {
    key: 'index',
    value: function index() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return this._client.index(this._route, options.include, options.filter, options.sort, options.page);
    }

    /**
     * Create a new resource
     *
     * @param {T} resource
     * @param {{include: string}} options
     * @return Promise<T>
     */

  }, {
    key: 'create',
    value: function create(resource) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return this._client.post(this._route, resource.toJR(), options.include);
    }

    /**
     * Updates the provided resource
     *
     * @param {T} resource
     * @param {{include: string}} options
     * @return Promise<T>
     */

  }, {
    key: 'update',
    value: function update(resource) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


      if (!resource.id) {
        throw new Error('You cannot update a resource without an id');
      }

      return this._client.patch(this._route + '/' + resource.id, resource.toJR(), options.include);
    }
  }]);

  return ResourceDao;
}();

/**
 * @class RelationshipDao
 */


var RelationshipDao = exports.RelationshipDao = function () {
  function RelationshipDao(client, parentRoute) {
    _classCallCheck(this, RelationshipDao);

    this._client = client;
    this._parentRoute = parentRoute;

    this.id = null;
  }

  _createClass(RelationshipDao, [{
    key: 'toOne',
    value: function toOne(childRoute) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return this._client.get(this._parentRoute + '/' + this._id + '/' + childRoute, options.include);
    }
  }, {
    key: 'toMany',
    value: function toMany(childRoute) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return this._client.index(this._parentRoute + '/' + this._id + '/' + childRoute, options.include, options.filter, options.sort, options.page);
    }
  }, {
    key: 'id',
    set: function set(id) {
      this._id = id;
      return this;
    }
  }]);

  return RelationshipDao;
}();

/**
 * @class
 * @template T
 */


var IndexResult = exports.IndexResult = function () {

  /**
   * @param {T[]} records
   * @param {Object} meta
   * @param {Object} page
   */
  function IndexResult(records, meta, page) {
    _classCallCheck(this, IndexResult);

    this.records = records;
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


  _createClass(IndexResult, [{
    key: 'filter',
    value: function filter(func) {
      return this.records.filter(func);
    }

    /**
     * Delegates to the map function of the contained array
     * @param func
     * @returns {Array.<T>}
     */

  }, {
    key: 'map',
    value: function map(func) {
      return this.records.map(func);
    }

    /**
     * Delegates to the every function of the contained array
     * @param func
     * @returns {Array.<T>}
     */

  }, {
    key: 'every',
    value: function every(func) {
      return this.records.every(func);
    }

    /**
     * Delegates to the forEach function of the contained array
     * @param func
     * @returns {Array.<T>}
     */

  }, {
    key: 'forEach',
    value: function forEach(func) {
      return this.records.forEach(func);
    }

    /**
     * Delegates to the find function of the contained array
     * @param func
     * @returns {Array.<T>}
     */

  }, {
    key: 'find',
    value: function find(func) {
      return this.records.find(func);
    }

    /**
     * Delegates to the reduce function of the contained array
     * @param func
     * @returns {Array.<T>}
     */

  }, {
    key: 'reduce',
    value: function reduce(func, initial) {
      return this.records.reduce(func, initial);
    }

    /**
     * Delegates to the [] function of the contained array
     * @param func
     * @returns {Array.<T>}
     */

  }, {
    key: 'objectAt',
    value: function objectAt(index) {
      return this.records[index];
    }

    // mount the iterator on this

  }, {
    key: Symbol.iterator,
    value: function value() {
      var _this = this;

      return {
        next: function next() {
          if (_this.index < _this.records.length) {
            return { value: _this.records[_this.index++], done: false };
          } else {
            _this.index = 0; //If we would like to iterate over this again without forcing manual update of the index
            return { done: true };
          }
        }
      };
    }
  }, {
    key: 'total',


    /**
     * The total length of records on the server
     * @returns {number}
     */
    get: function get() {
      return this.meta['record-count'];
    }

    /**
     * The length of this result set
     * @returns {number}
     */

  }, {
    key: 'length',
    get: function get() {
      return this.records.length;
    }

    /**
     * Whether or not there are more records on the server that match this set
     * @returns {boolean}
     */

  }, {
    key: 'hasMore',
    get: function get() {
      return this.page.offset + this.page.limit < this.total;
    }
  }]);

  return IndexResult;
}();

/**
 * @class JRClient
 */


var JRClient = exports.JRClient = function () {
  function JRClient(baseUrl, apiKey) {
    _classCallCheck(this, JRClient);

    this.baseUrl = baseUrl;
    this.apiKey = apiKey;

    this.headers = {
      'Authorization': 'Token token="' + apiKey + '"',
      'Accept': 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json'
    };
  }

  /**
   * @param uri
   * @param options
   * @returns {Promise.<T>}
   */


  _createClass(JRClient, [{
    key: 'fetchJR',
    value: function fetchJR(uri) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


      var method = options.method || 'GET';
      var body = options.body;
      var include = options.include;
      var filter = options.filter;
      var sort = options.sort;
      var page = options.page;

      var qs = [];

      // Append Filters
      if (include) {
        if (Array.isArray(include)) {
          include = include.join(',');
        }

        qs.push('include=' + include);
      }

      // Append Filters
      if (filter) {
        qs = qs.concat(Object.entries(filter).map(function (_ref4) {
          var _ref5 = _slicedToArray(_ref4, 2),
              key = _ref5[0],
              value = _ref5[1];

          return 'filter[' + (0, _inflected.dasherize)((0, _inflected.underscore)(key)) + ']=' + value;
        }));
      }

      // Append Page
      if (page) {
        qs = qs.concat(Object.entries(page).map(function (_ref6) {
          var _ref7 = _slicedToArray(_ref6, 2),
              key = _ref7[0],
              value = _ref7[1];

          return 'page[' + (0, _inflected.dasherize)((0, _inflected.underscore)(key)) + ']=' + value;
        }));
      }

      if (sort) {
        qs.push('sort=' + sort);
      }

      qs = qs.length ? '?' + qs.join('&') : '';

      var url = this.baseUrl + 'api/v3/' + uri + qs;

      console.log(method + ': ' + url);

      return (0, _crossFetch2.default)(url, {
        headers: this.headers,
        method: method,
        body: body ? JSON.stringify(body) : body
      }).then(function (response) {
        return response.json().then(function (body) {
          // Handle all errors the same
          if (response.status > 299) {
            var errors = body.errors;
            if (errors && errors[0]) {
              throw errors[0].title + ': ' + errors[0].detail;
            } else {
              throw response.status + ': something went wrong';
            }
          }

          return body;
        });
      });
    }
  }, {
    key: 'index',
    value: function index(uri, include, filter, sort, page) {
      return this.fetchJR(uri, {
        include: include,
        filter: filter,
        sort: sort,
        page: page
      }).then(function (_ref8) {
        var data = _ref8.data,
            included = _ref8.included,
            meta = _ref8.meta;
        return new IndexResult(data.map(function (_) {
          return extractJRObject(_, included);
        }), meta, page);
      });
    }
  }, {
    key: 'get',
    value: function get(uri, include) {
      return this.fetchJR(uri, {
        include: include
      }).then(function (_ref9) {
        var data = _ref9.data,
            included = _ref9.included;
        return extractJRObject(data, included);
      });
    }
  }, {
    key: 'post',
    value: function post(uri, record, include) {
      return this.fetchJR(uri, {
        method: 'POST',
        body: record,
        include: include
      }).then(function (_ref10) {
        var data = _ref10.data,
            included = _ref10.included;
        return extractJRObject(data, included);
      });
    }
  }, {
    key: 'patch',
    value: function patch(uri, record, include) {
      return this.fetchJR(uri, {
        method: 'PATCH',
        body: record,
        include: include
      }).then(function (_ref11) {
        var data = _ref11.data,
            included = _ref11.included;
        return extractJRObject(data, included);
      });
    }
  }, {
    key: 'delete',
    value: function _delete(uri) {
      return this.fetchJR(uri, {
        method: 'DELETE'
      });
    }
  }]);

  return JRClient;
}();