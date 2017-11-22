import { ResourceDao } from '../../src/client-base';
import Faker from 'faker';
import Resource from "../../src/resources/resource";

let mockJRClient;
let indexMock;
let getMock;
let createMock;
let updateMock;

beforeEach(() => {
  mockJRClient = {
    get: jest.fn(),
    index: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
  };

  indexMock = mockJRClient.index.mock;
  getMock = mockJRClient.get.mock;
  createMock = mockJRClient.create.mock;
  updateMock = mockJRClient.update.mock;

});

test('ResourceDao#get maps id and type to the url', () => {
  const type = Faker.lorem.word();
  const id = Faker.lorem.word();
  const dao = new ResourceDao(mockJRClient, type);

  dao.get(id);

  expect(getMock.calls.length).toBe(1);
  expect(getMock.calls[0][0]).toBe(`${type}/${id}`);
});

test('ResourceDao#index maps type to the url', () => {
  const type = Faker.lorem.word();
  const dao = new ResourceDao(mockJRClient, type);

  dao.index();

  expect(indexMock.calls.length).toBe(1);
  expect(indexMock.calls[0][0]).toBe(type);
});

test('ResourceDao#index filters non allowable options', () => {
  const type = Faker.lorem.word();
  const dao = new ResourceDao(mockJRClient, type);

  dao.index({
    include: 'foo',
    filter: 'bar',
    sort: 'baz',
    page: 'pago',
    iShouldNotBePresent: 'bah'
  });

  expect(indexMock.calls.length).toBe(1);
  expect(indexMock.calls[0][0]).toBe(type);
  expect(indexMock.calls[0][1]).toBe('foo');
  expect(indexMock.calls[0][2]).toBe('bar');
  expect(indexMock.calls[0][3]).toBe('baz');
  expect(indexMock.calls[0][4]).toBe('pago');
  expect(indexMock.calls[0][5]).not.toBe('bah');
});


test('Resource#Update should throw you try and update a resource without and id', () => {

  try {
    const type = Faker.lorem.word();
    const dao = new ResourceDao(mockJRClient, type);
    dao.update(new Resource());
    jest.fail('Should not reach');
  }
  catch (e) {
    expect(e.message).toBe('You cannot update a resource without an id')
  }

});
