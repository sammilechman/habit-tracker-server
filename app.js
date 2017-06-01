// Load environment vars
require('dotenv').config()

const express = require('express')
const app = express()
const serverPort = process.env.SERVER_PORT;

app.listen(serverPort, function() {
  console.log(`Server listening on port ${serverPort}!`);
});

app.get('/', function(req, res) {
  res.send('Hello World!')
});

app.get('/test', function(req, res) {
  res.send('here');
});
