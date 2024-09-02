const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Hello from the server root!');
});

// API routes
app.use('/api', require('./routes/api'));

module.exports = app;