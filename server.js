// Environment Variables
require('dotenv').config({ quiet: true });
// Framework
const express = require('express');
// Application
const app = express();
// Middlewares
const { cors } = require('./middlewares');

// Parse incoming JSON requests and attach the data to req.body
app.use(express.json());
// Enable CORS with custom configuration
app.use(cors);

// Handle browser's automatic favicon.ico requests with 204 (No Content)
app.get('/favicon.ico', (req, res) => {
  res.sendStatus(204);
});
// Health check endpoint to confirm the server is running
app.get('/', (req, res) => {
  res.status(200).json({ message: 'API is running' });
});

// Start HTTP server
app.listen(port, () => {
  console.info(`Express server listening on port ${process.env.PORT || 3000}`);
});
