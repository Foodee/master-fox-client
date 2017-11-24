"use strict";

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
    var relationships = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, Resource);

    this._id = id;
    this._type = type;
    this._attributes = attributes;
    this._relationships = relationships;
  }

  /** @type {number|string} **/


  _createClass(Resource, [{
    key: "toJSONAPI",
    value: function toJSONAPI() {

      var request = {
        data: {
          type: this._type,
          attributes: this._attributes
        }
      };

      if (this.id) {
        request.data.id = this.id.toString();
      }

      return request;
    }
  }, {
    key: "id",
    get: function get() {
      return this._id;
    }

    /** @type {number|string} **/
    ,
    set: function set(id) {
      this._id = id;
    }
  }, {
    key: "type",
    set: function set(type) {
      this._type = type;
    }
  }, {
    key: "attributes",
    set: function set(attributes) {
      this._attributes = attributes;
    }
  }, {
    key: "relationships",
    set: function set(relationships) {
      this._relationships = relationships;
    }
  }]);

  return Resource;
}();

exports.default = Resource;