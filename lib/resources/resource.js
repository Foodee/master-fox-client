'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class Resource
 */
var Resource = function () {
  function Resource() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var one = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var many = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

    _classCallCheck(this, Resource);

    this._id = id;
    this._type = type;
    this._attributes = attributes;
    this._one = one;
    this._many = many;
  }

  /** @type {boolean} **/


  _createClass(Resource, [{
    key: 'toJSONAPI',


    /**
     * Serializes to JSONAPI
     *
     * TODO: ADD support for relationships
     * @return {{data: {type: *, attributes: *}}}
     */
    value: function toJSONAPI() {
      var _this = this;

      var include = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];


      function _extractRelationship(value) {
        return {
          // need to peak under the covers here
          type: value._type,
          id: value.id
        };
      }

      var relationships = include.reduce(function (acc, included) {
        var ret = void 0;
        var value = void 0;

        if ((value = _this._one[included]) !== undefined) {
          ret = value ? _extractRelationship(value) : null;
        } else if ((value = _this._many[included]) !== undefined) {
          ret = value ? value.map(_extractRelationship) : [];
        } else {
          throw 'The provided include ' + included + ' is not present on this object. If you are trying to clear a relationship you must explicitly set it to null.';
        }

        acc[included] = {
          data: ret
        };

        return acc;
      }, {});

      var request = {
        data: {
          type: this._type,
          attributes: this._attributes,
          relationships: relationships
        }
      };

      if (this.id) {
        request.data.id = this.id.toString();
      }

      return request;
    }
  }, {
    key: 'persisted',
    get: function get() {
      return this._id !== null;
    }

    /** @type {number|string} **/

  }, {
    key: 'id',
    get: function get() {
      return this._id;
    }

    /** @type {number|string} **/
    ,
    set: function set(id) {
      this._id = id;
    }
  }, {
    key: 'type',
    set: function set(type) {
      this._type = type;
    }
  }, {
    key: 'attributes',
    set: function set(attributes) {
      this._attributes = attributes;
    }
  }, {
    key: 'relationships',
    get: function get() {
      return Object.assign({}, this._one, this._many);
    }
  }]);

  return Resource;
}();

exports.default = Resource;