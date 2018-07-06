import mockResourcesResponseWithIncluded from '../mocks/mock-resources-response-with-included';
import { MockResourceDao } from "../mocks/mock-resource-dao";
import { MockJRClient } from "../mocks/mock-jr-client";
import { MockResource } from "../mocks/mock-resource";
import ResourceClasses from "../../src/resources/resources";
import mockResourceResponseWithIncluded from "../mocks/mock-resource-response-with-included";
import mockResourceResponse from "../mocks/mock-resource-response";

// Register the MockResource with the resource class registry
ResourceClasses['mock-resources'] = MockResource;

const testUrl = 'http://test.food.ee/';
const apiToken = 'an-token';

let mockClient;
let dao;

beforeEach(() => {
  mockClient = new MockJRClient(testUrl, apiToken);
  dao = new MockResourceDao(mockClient);
});

test('Correctly extracts a single resource from a JR payload', async () => {
  const response = mockClient.response = mockResourceResponse;

  const result = await dao.get(response.data.id);

  expect(mockClient.method).toBe('GET');
  expect(mockClient.url).toBe(`${testUrl}api/v3/mock-resources/${result.id}`);

  expect(result).not.toBe(null);
  expect(result.id).toBe(response.data.id);
  expect(result.foo).toBe(response.data.attributes.foo);
  expect(result.bar).toBe(response.data.attributes.bar);
});

test('Correctly extracts a single resource from a JR payload with included relationships', async () => {
  const response = mockClient.response = mockResourceResponseWithIncluded;

  const result = await dao.get(response.data.id, {include: 'one,many'});

  expect(mockClient.url).toBe(`${testUrl}api/v3/mock-resources/${result.id}?include=one,many`);
  expect(mockClient.method).toBe('GET');

  expect(result).not.toBe(null);
  expect(result.id).toBe(response.data.id);
  expect(result.foo).toBe(response.data.attributes.foo);
  expect(result.bar).toBe(response.data.attributes.bar);

  expect(result.one).not.toBe(null);
  expect(result.one.id).toBe('124');
  expect(result.one.foo).toBe(1);
  expect(result.one.bar).toBe('test');

  expect(result.many[0]).not.toBe(null);
  expect(result.many[0].id).toBe('124');
  expect(result.many[0].foo).toBe(1);
  expect(result.many[0].bar).toBe('test');
});

test('Correctly extracts multiple resources with included relationships', async () => {
  const response = mockClient.response = mockResourcesResponseWithIncluded;

  let result = await dao.index({include: 'one,many'});
  result = result.objectAt(0);

  expect(mockClient.method).toBe('GET');
  expect(mockClient.url).toBe(`${testUrl}api/v3/mock-resources?include=one,many`);
  expect(result).not.toBe(null);
  expect(result.id).toBe(response.data[0].id);
  expect(result.foo).toBe(response.data[0].attributes.foo);
  expect(result.bar).toBe(response.data[0].attributes.bar);

  expect(result.one).not.toBe(null);
  expect(result.one.id).toBe('124');
  expect(result.one.foo).toBe(1);
  expect(result.one.bar).toBe('test');

  expect(result.many[0]).not.toBe(null);
  expect(result.many[0].id).toBe('124');
  expect(result.many[0].foo).toBe(1);
  expect(result.many[0].bar).toBe('test');
});

test('Allows getting a related to one', async () => {
  const response = mockClient.response = mockResourceResponse;

  const result = await dao.from(1).get.one(response.data.id);

  expect(mockClient.method).toBe('GET');
  expect(mockClient.url).toBe(`${testUrl}api/v3/mock-resources/1/one`);
});

test('Allows indexing a related to many', async () => {
  const response = mockClient.response = mockResourcesResponseWithIncluded;

  const result = await dao.from(1).index.many(response.data.id);

  expect(mockClient.method).toBe('GET');
  expect(mockClient.url).toBe(`${testUrl}api/v3/mock-resources/1/many`);

});
