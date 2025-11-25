// Environment Variables
const { NODE_ENV, SERVER_URL, PORT, CLIENT_URL, CLIENT_PORT } =
  process.env;

const isProd = NODE_ENV === 'production';

const serverUrl = isProd ? SERVER_URL : `http://localhost:${PORT || 3000}`;
const clientUrl = isProd ? CLIENT_URL : `http://localhost:${CLIENT_PORT || 5173}`;

module.exports = { serverUrl, clientUrl };
