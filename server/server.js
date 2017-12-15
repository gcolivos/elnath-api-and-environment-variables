require('dotenv').config();

var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT;
var giphy= require('./routes/giphy.route')

// Serve back static files by default
app.use(express.static('server/public'));

app.use('/giphy', giphy);

app.listen(port, function (req, res) {
  console.log('Listening on port', port);
});
