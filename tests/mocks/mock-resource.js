import Resource from "../../src/resources/resource";

export class MockResource extends Resource {

  constructor(id = null, attributes = {}, one = {}, many= {}) {
    super(id, 'mock-resources', attributes, one, many);
  }

  // attributes

  /** @param {number} foo **/
  set foo(foo){this._attributes['foo'] = foo};
  /** @type {number}} */
  get foo(){return this._attributes['foo'];};

  /** @param {string} bar **/
  set bar(bar){this._attributes['bar'] = bar};
  /** @type {string} */
  get bar(){return this._attributes['bar'];};

  /** @param {MockResource} one **/
  set one(one){this._one['one'] = one};
  /** @type {MockResource]} */
  get one(){return this._one['one']};

  /** @param {MockResource[]} many **/
  set many(many){this._many['many'] = many};
  /** @type {MockResource[]} */
  get many(){return this._many['many']};

}

