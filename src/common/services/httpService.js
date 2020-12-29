import { httpMethod } from '../config/apiConfig';

export class HttpService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  GET(path) {
    return this.makeRequest(path, httpMethod.GET);
  }

  makeRequest(path, method) {
    const url = `${this.baseUrl}${path}`;

    const headers = {
      'content-type': 'application/json',
    };

    const params = {
      method,
      headers,
    };

    return fetch(url, params).then(async (response) => {
      if (response.ok && response.status === 200) {
        return response.json();
      }

      throw new Error('Something went wrong...');
    });
  }
}
