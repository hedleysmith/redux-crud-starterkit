/* global API_MODE, API_ROOT */
/**
 * The API Service, handles all API calls.
 *
  * Here we configure where to send requests to. Usually we'll want to send them
  * to a backend service or external service, but sometimes during testing and
  * development we might want to use mock data.
  *
  * API constants can be set in /app/config/index.js and are passed through to
  * the frontend by Webpack in /app/build/webpack.config.js
  */
import fetch from 'isomorphic-fetch';

// Resource URIs.
const API = {};

// PRODUCTION.
if (API_MODE === 'production') {
  API.API_ITEMS = `${API_ROOT}/items`;
}

// DEVELOPMENT.
if (API_MODE === 'development') {
  API.API_ITEMS = `${API_ROOT}/items`;
}

// MOCK DATA.
if (API_MODE === 'mock') {
  API.API_ITEMS = `${API_ROOT}/mockItems.json`;
}

export { API };

const apiService = {};

// Items.
apiService.itemCreate = (id) => {
  // TODO.
};

apiService.itemFetch = () => {
  return fetch(API.API_ITEMS)
          .then(response => response.json())
          .then(json => json);
};

apiService.itemUpdate = (itemData) => {
  if (API_MODE === 'mock') {
    // TODO add optional delay to simulate network call latency.
    return new Promise((resolve, reject) => {
      if (Math.random() < 0.2) {
        reject(new Error('Failed to fetch! 20% of fetches set to fail :('));
      }
      resolve('Success!');
    });
  }

  return fetch(API.API_ITEMS + '/' + itemData.id, {
    method: 'PATCH',
    body: JSON.stringify(itemData.update),
  })
  .then(response => response.json())
  .then(json => json);
};

apiService.itemDelete = (id) => {
  // TODO.
};

// Other entities would go here...

export { apiService };
