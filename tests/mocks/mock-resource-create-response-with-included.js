const mockResourceCreateResponseWithIncluded = {
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

export const mockResourceCreateRequestWithIncluded = {
  data: {
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

export default mockResourceCreateResponseWithIncluded;
