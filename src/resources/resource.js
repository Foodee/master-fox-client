/**
 * @class Resource
 */
export default class Resource {

  constructor(id = null, type = null, attributes = {}, relationships = {}) {
    this._id = id;
    this._type = type;
    this._attributes = attributes;
    this._relationships = relationships;
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

  set relationships(relationships) {
    this._relationships = relationships;
  }

  toJSONAPI() {

    const request = {
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

}

