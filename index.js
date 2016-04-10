var express = require('express');
var cool = require('cool-ascii-faces');
var app = express();
var path = require('path');

app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public/views'));
app.use(express.static(__dirname + '/'));
app.use(express.static(__dirname + '/tests'));
require('ejs').delimiter = '$';

app.get('/', function (req, res) {
  res.render('index', {title: 'Analizador CSV'});
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port!' + process.env.PORT);
});