var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Configure app to use bodyParser() this will let us get the data from a POST
// request
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

// Enable CORS for local testing
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Make sure we respond properly to OPTIONS requests. Thse are sometimes sent
  // as 'preflight' requests by browsers to check we'll be OK with the request
  // they're about to send
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

// DB Connection
var mongoose = require('mongoose');
mongoose.connect('mongodb://mongodb:27017/reduxcrud');

// Load routes
var test = require('./routes/test');
var posts = require('./routes/posts');
//var tags = require('./routes/tags');

// Use routes in app, prefixed with /api/v1
app.use('/', test);
app.use('/api/v1/posts', posts);
//app.use('/api/v1/tags', tags);

// Start the server
var server = app.listen(3001, function() {
  var port = server.address().port;
  console.log('Example app listening at http://localhost:%s', port);
});
