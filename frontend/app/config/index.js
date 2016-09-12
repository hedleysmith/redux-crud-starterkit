/**
 * Configuration.
 * These are global configuration options, they can all be overriden by setting
 * environmental variables which can be passed into the application at runtime.
 */
const config = {};

// Node environment. testing | development | production.
config.env = process.env.NODE_ENV || 'development';

// Server port.
config.SERVER_PORT = process.env.SERVER_PORT || 3010;

// AUTH_MODE set the method of authentication.
// - off = disable authentication entirely (note: must set DEFAULT_USER).
// - development = use development settings.
// - production = use production settings.
config.AUTH_MODE = process.env.AUTH_MODE || 'development';

// DEFAULT USER default user ID to be logged in as.
config.DEFAULT_USER = process.env.DEFAULT_USER || 'CHANGEME';
config.DEFAULT_USER_DATA = process.env.DEFAULT_USER_DATA || 'TODO: JSON file with default user data';

// Authentication config.
config.AUTH_API = process.env.AUTH_API || 'TODO: Auth API details';

// API_MODE switches the frontend to use alternate sources for data.
// - mock = load data from local mock JSON file served by this app.
// - development = load data from local backend server.
// - production = production server details.
config.API_MODE = process.env.AUTH_MODE || 'development';

// API_ROOT the first part of the URL for backend API calls.
if (config.env === 'production') {
  config.API_ROOT = process.env.API_ROOT || 'https://myapi.com/api/v1';
} else if (config.API_MODE === 'mock') {
  // In mock mode we serve dummy data from this app.
  config.API_ROOT = process.env.API_ROOT || 'http://localhost:3010';
} else {
  config.API_ROOT = process.env.API_ROOT || 'http://localhost:3001/api/v1';
}

module.exports = config;
