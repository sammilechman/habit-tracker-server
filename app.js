const express = require('express')
const app = express()
const config = require('./config');
const serverPort = config.serverPort;

app.get('/', function (req, res) {
  res.send('Hello World!')
})


app.listen(serverPort, function () {
  console.log(`server listening on port ${serverPort}!`)
})
