const mockResourceUpdateResponse = {
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

export const mockResourceUpdateRequest = {
  data: {
    type: 'mock-resources',
    id: '123',
    attributes: {
      foo: 123,
      bar: '123'
    },
    relationships:{}
  }
};
export default mockResourceUpdateResponse;
