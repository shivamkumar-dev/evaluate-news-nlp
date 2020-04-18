const dotenv = require('dotenv');
dotenv.config();
const aylien = require('aylien_textapi');
// set aylien API credentials
const textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY,
});

const path = require('path');
const mockAPIResponse = require('./mockAPI.js');

// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware */
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

app.use(express.static('dist'));

console.log(__dirname);

app.get('/', function (req, res) {
  res.sendFile('dist/index.html');
});

const port = 8081;

// Setup Server
const server = app.listen(port, listening);

function listening() {
  console.log('server running');
  console.log(`running on localhost: ${port}`);
}

app.get('/test', function (req, res) {
  res.send(mockAPIResponse);
});

// POST Route
app.post('/add', (req, res) => {
  projectData.sentence = req.body.sentence;
  res.send(projectData);
});

// GET Route
app.get('/sentiment', function (req, res) {
  textapi.sentiment(
    {
      text: projectData.sentence,
    },
    function (error, response) {
      if (error === null) {
        res.send(response);
      }
    }
  );
});
