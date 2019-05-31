var path = require('path');
var express = require('express');
//var exphbs = require('express-handlebars');

var app = express();
var PORT = process.env.PORT || 3000;

app.get('/',function(req, res, next) {
  res.status(200).sendFile(__dirname + '/public/home.html');
});

app.listen(PORT, function(err) {
  if(err) {
    throw err;
  }
  console.log("== Server is listening on PORT", PORT);
});
