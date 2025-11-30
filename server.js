// Environment Variables
require('dotenv').config({ quiet: true });
// Framework
const express = require('express');
// Application
const app = express();
// Middlewares
const { cors } = require('./middlewares');
// Port
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors);

app.get('/favicon.ico', (req, res) => res.sendStatus(204));
app.get('/', (req, res) => res.status(200).json({ message: 'API is running' }));

app.listen(port, () => console.info(`Server listening on port ${port}`));
