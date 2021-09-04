var express = require('express')
var fs = require('fs')
var bodyParser = require('body-parser')
var cors = require('cors');
var app = express()

app.use(bodyParser.json())

app.use(cors());

app.get('/', function(request, response) {
  response.json({
    result: ""
  })
})

app.post('/', function(request, response) {
  if (!request.body.source) {
    return response.status(400).json({
      err: "Missing source body parameter"
    });
  }
  console.log("Treating", request.body.source)
  var randomTime = getRandom(5000);
  console.log("Taking", randomTime, "ms to solve...");
  setTimeout(function() {
    response.json({
      result: ""
    })
  }, randomTime);
})

function getRandom(max) {
  return Math.random() * max;
}

port = 8080
app.listen(port)
console.log(`Listening at http://localhost:${port}`)
