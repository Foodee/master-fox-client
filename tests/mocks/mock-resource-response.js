import Faker from 'faker';

const mockResourceResponse = {
  data: {
    type: 'mock-resources',
    id: '123',
    attributes: {
      foo: Faker.random.number(),
      bar: Faker.lorem.sentence(),
    }
  },
  included: [],
  meta: {}
};

export default mockResourceResponse;
