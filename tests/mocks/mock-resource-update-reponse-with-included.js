const mockResourceUpdateResponseWithIncluded = {
  data: {
    type: 'mock-resources',
    id: '123',
    attributes: {
      foo: 123,
      bar: '123'
    }
  },
  included: [],
  meta: {}
};

export const mockResourceUpdateRequestWithIncluded = {
  data: {
    id:"123",
    type: 'mock-resources',
    attributes: {
      foo: 123,
      bar: '123'
    },
    relationships: {
      many: {"data": [{"id": 2, "type": "mock-resources"}]},
      one: {"data": {"id": 1, "type": "mock-resources"}}
    },
  }
};

export const mockResourceUpdateRequestWithIncludedNulls = {
  data: {
    id:"123",
    type: 'mock-resources',
    attributes: {
      foo: 123,
      bar: '123'
    },
    relationships: {
      many: {"data": []},
      one: {"data": null}
    },
  }
};

export default mockResourceUpdateResponseWithIncluded;
