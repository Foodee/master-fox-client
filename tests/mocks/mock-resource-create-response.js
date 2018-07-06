const mockResourceCreateResponse = {
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

export const mockResourceCreateRequest = {
  data: {
    type: 'mock-resources',
    attributes: {
      foo: 123,
      bar: '123'
    },
    relationships:{}
  }
};
export default mockResourceCreateResponse;
