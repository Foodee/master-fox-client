import { MockResourceDao } from "../mocks/mock-resource-dao";
import { MockJRClient } from "../mocks/mock-jr-client";
import { MockResource } from "../mocks/mock-resource";
import ResourceClasses from "../../src/resources/resources";
import mockResourceCreateResponse, { mockResourceCreateRequest } from "../mocks/mock-resource-create-response";
import mockResourceCreateResponseWithIncluded, { mockResourceCreateRequestWithIncluded } from "../mocks/mock-resource-create-response-with-included";
import mockResourceUpdateResponse, { mockResourceUpdateRequest } from "../mocks/mock-resource-update-response";
import mockResourceUpdateResponseWithIncluded, {
  mockResourceUpdateRequestWithIncluded,
  mockResourceUpdateRequestWithIncludedNulls
} from "../mocks/mock-resource-update-reponse-with-included";

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

test('Correctly creates a single resource', async () => {
  const response = mockClient.response = mockResourceCreateResponse;

  const resource = new MockResource();

  resource.foo = 123;
  resource.bar = '123';

  const result = await dao.create(resource);

  expect(mockClient.url).toBe(`${testUrl}api/v3/mock-resources`);
  expect(mockClient.method).toBe('POST');

  expect(result.persisted).toBe(true);
  expect(mockClient.body).toEqual(mockResourceCreateRequest);
});


test('Correctly creates a single resource with included resources', async () => {
  const response = mockClient.response = mockResourceCreateResponseWithIncluded;

  const resource = new MockResource();

  resource.foo = 123;
  resource.bar = '123';
  resource.one = new MockResource(1);
  resource.many = [new MockResource(2)];

  const result = await dao.create(resource, {include: 'one,many'});

  expect(mockClient.url).toBe(`${testUrl}api/v3/mock-resources?include=one,many`);
  expect(mockClient.method).toBe('POST');

  expect(result.persisted).toBe(true);
  expect(mockClient.body).toEqual(mockResourceCreateRequestWithIncluded);
});

test('Correctly updates a single resource', async () => {
  const response = mockClient.response = mockResourceUpdateResponse;

  const resource = new MockResource();

  resource.id = '123';
  resource.foo = 123;
  resource.bar = '123';

  const result = await dao.update(resource);

  expect(mockClient.url).toBe(`${testUrl}api/v3/mock-resources/123`);
  expect(mockClient.method).toBe('PATCH');
  expect(result.persisted).toBe(true);
  expect(mockClient.body).toEqual(mockResourceUpdateRequest);
});


test('Prevents updates on none persisted objects', async () => {
  const resource = new MockResource();
  try {
    const result = await dao.update(resource, {include: 'one,many'});
    fail('should not be able to update new records');
  }
  catch (e) {
  }
});

test('Correctly updates a single resource with included resources', async () => {
  const response = mockClient.response = mockResourceUpdateResponseWithIncluded;

  const resource = new MockResource();

  resource.id = '123';
  resource.foo = 123;
  resource.bar = '123';
  resource.one = new MockResource(1);
  resource.many = [new MockResource(2)];

  const result = await dao.update(resource, {include: 'one,many'});

  expect(mockClient.url).toBe(`${testUrl}api/v3/mock-resources/123?include=one,many`);
  expect(mockClient.method).toBe('PATCH');
  expect(result.persisted).toBe(true);
  expect(mockClient.body).toEqual(mockResourceUpdateRequestWithIncluded);
});

test('Correctly updates a single resource with included resources set to null', async () => {
  mockClient.response = mockResourceUpdateResponseWithIncluded;

  const resource = new MockResource();

  resource.id = '123';
  resource.foo = 123;
  resource.bar = '123';
  resource.one = null;
  resource.many = null;

  const result = await dao.update(resource, {include: 'one,many'});

  expect(mockClient.url).toBe(`${testUrl}api/v3/mock-resources/123?include=one,many`);
  expect(mockClient.method).toBe('PATCH');
  expect(result.persisted).toBe(true);
  expect(mockClient.body).toEqual(mockResourceUpdateRequestWithIncludedNulls);
});


test('Correctly raises an exception when attempting to include an undefined relationship', async () => {
  const resource = new MockResource();
  resource.id = '123';
  resource.foo = 123;
  resource.bar = '123';

  try {
    await dao.update(resource, {include: 'one,many'});
    fail('Should raise an exception');
  }
  catch (e) {
  }
});

test('Correctly deletes a single resource', async () => {
  const resource = new MockResource();

  resource.id = '123';
  resource.foo = 123;
  resource.bar = '123';

  const result = await dao.destroy(resource);

  expect(mockClient.url).toBe(`${testUrl}api/v3/mock-resources/123`);
  expect(mockClient.method).toBe('DELETE');
});

test('Allows invoking a custom action on a resource', async () => {
  await dao.from(1).action('foo',{foo: 'bar'});
  expect(mockClient.url).toBe(`${testUrl}api/v3/mock-resources/1/foo`);
  expect(mockClient.method).toBe('POST');
  expect(mockClient.body).toEqual({foo: 'bar'});
});
