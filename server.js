var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
var PORT = process.env.PORT || 3000;

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

var questions = require('questionData');


app.use(express.static('public'));

app.get('/',function(req, res, next) {
  res.status(200).sendFile(__dirname + '/public/home.html');
});

app.get('/create_question', function(req, res, next) {
    res.status(200).render('createQuestion');
});

app.get('/answer_question/:category/:number', function(req, res, next) {
    var question = questions[req.params.category][req.params.number];
    res.status(200).render('answerQuestion', question);
});

app.get('/answer_question/:category', function (req, res, next) {
    var questions = questions[req.params.category];
    res.status(200).render('listOfQuestions', questions);
})

app.get('/', function(req, res, next) {
    res.status(200).sendFile(__dirname + 'public/categories.html');
});

app.listen(PORT, function(err) {
  if(err) {
    throw err;
  }
  console.log("== Server is listening on PORT", PORT);
});
