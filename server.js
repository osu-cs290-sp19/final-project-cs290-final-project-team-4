var path = require('path');
var express = require('express');
//var exphbs = require('express-handlebars');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/',function(req, res, next) {
  res.status(200).sendFile(__dirname + '/public/home.html');
});

app.get('/', function(req, res, next) {
  res.status(200).sendFile(__dirname + '/public/create-question.html');
});

app.get('/', function(req, res, next) {
  res.status(200).sendFile(__dirname + '/public/answer_question.html');
});

app.get('/', function(req, res, next) {
  res.status(200).sendFile(__dirname + 'public/categories.html');
});

app.listen(PORT, function(err) {
  if(err) {
    throw err;
  }
  console.log("== Server is listening on PORT", PORT);
});
