var express = require('express');
var app = module.exports = express();
var path = require('path');
var flask = require('./flask');
var router = express.Router();
var __projectRoot = __dirname;

app.use('/flask', flask);

app.use(express.static(__projectRoot));
app.get('*', function (req, res) 
{
  res.sendfile(path.join(__projectRoot + '/index.html'));
});

console.log('Server up and running on http://localhost:3000/');
app.listen(3000);