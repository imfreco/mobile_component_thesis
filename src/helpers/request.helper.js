import {apis} from '../fixtures/apis';

const apiUrl = apis.baseUrl;

export const fetchWithoutToken = (endpoint, data, method = 'GET') => {
  const url = `${apiUrl}${endpoint}`;

  if (method === 'GET') {
    return fetch(url);
  } else {
    return fetch(url, {
      method,
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }
};
