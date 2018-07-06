/**
 * @class Resource
 */
export default class Resource {

  constructor(id = null, type = null, attributes = {}, one = {}, many = {}) {
    this._id = id;
    this._type = type;
    this._attributes = attributes;
    this._one = one;
    this._many = many;
  }

  /** @type {boolean} **/
  get persisted() {
    return this._id !== null;
  }

  /** @type {number|string} **/
  get id() {
    return this._id;
  }

  /** @type {number|string} **/
  set id(id) {
    this._id = id;
  }

  set type(type) {
    this._type = type;
  }

  set attributes(attributes) {
    this._attributes = attributes;
  }

  get relationships() {
    return Object.assign({}, this._one, this._many);
  }

  /**
   * Serializes to JSONAPI
   *
   * TODO: ADD support for relationships
   * @return {{data: {type: *, attributes: *}}}
   */
  toJSONAPI(include = []) {

    function _extractRelationship(value) {
      return {
        // need to peak under the covers here
        type: value._type,
        id: value.id
      };
    }

    let relationships = include.reduce((acc, included) => {
      let ret;
      let value;

      if ((value = this._one[included]) !== undefined) {
        ret = value ? _extractRelationship(value) : null;
      } else if ((value = this._many[included]) !== undefined) {
        ret = value ? value.map(_extractRelationship) : [];
      } else {
        throw 'The provided include ' + included + ' is not present on this object. If you are trying to clear a relationship you must explicitly set it to null.'
      }

      acc[included] = {
        data: ret
      };

      return acc;
    }, {});

    const request = {
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

}

