var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
var PORT = process.env.PORT || 3927;

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

var questions = require('./questionData');


app.use(express.static('public'));

app.get('/',function(req, res, next) {
    console.log('==questionData', questions);
    res.status(200).render('homepage', {questions});
});

app.get('/create_question', function(req, res, next) {
    res.status(200).render('createQuestion');
});

app.get('/answer_question/:category/:number', function (req, res, next) {
    var cat = req.params.category.toLowerCase();
    var num = req.params.number;
    if (questions[category] && num >= 0 && num < questions[cat].questions.length) {
        var question = questions[req.params.category][req.params.number];
        res.status(200).render('answerQuestion', question);
    }
    else {
        res.status(404).render('404');
    }
});

app.get('/answer_question/:category', function (req, res, next) {
    var cat = req.params.category.toLowerCase();
    if (questions[cat]) {
        var questions = questions[req.params.category];
        res.status(200).render('listOfQuestions', questions);
    }
    else {
        res.status(404).render('404');
    }
});

app.get('/categories', function(req, res, next) {
    res.status(200).sendFile(__dirname + '/public/categories.html');
});

app.get('*',function(req, res, next){
	res.status(404).render('404');
});

app.get('*', function(req, res, next)   {
    res.status(404).render('404');
});

app.listen(PORT, function(err) {
  if(err) {
    throw err;
  }
  console.log("== Server is listening on PORT", PORT);
});
