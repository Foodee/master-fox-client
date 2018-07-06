import { JRClient } from "../../src/client-base";

export class MockJRClient extends JRClient {

  constructor(baseUrl, token, userId = null, email = null) {
    super(baseUrl, token, userId, email);

    this.response = {};
    this.url = '';
    this.body = {};
    this.headers = {};
  }

  _doFetch(url, method, headers, body) {
    this.url = url;
    this.method = method;
    this.headers = headers;
    this.body = body;

    return Promise.resolve(this.response);
  }

}
