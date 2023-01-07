const express = require('express');
require('express-async-errors');  //async error handler
const app = express();

// LOGGER MIDDLEWARE
app.use((req, res, next) => {
  console.log("Request method", req.method);
  console.log("Request url", req.url);
  next();
});

// JSON parsing
app.use(express.json());


// STATIC RESOURCE ASSETS
app.use('/static', express.static("assets"));

// For testing purposes, GET /
app.get('/', (req, res) => {
  res.json("Express server running. No content provided at root level. Please use another route.");
});

// For testing express.json middleware
app.post('/test-json', (req, res, next) => {
  // send the body as JSON with a Content-Type header of "application/json"
  // finishes the response, res.end()
  res.json(req.body);
  next();
});

// For testing express-async-errors
app.get('/test-error', async (req, res) => {
  throw new Error("Hello World!")
});

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
