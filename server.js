var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var fs = require('fs');
var Chart = require('chart.js');

var app = express();
var PORT = process.env.PORT || 3927;

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

var database = require('./questionData');
app.use(bodyParser.json());
app.use(express.static('public'));


var min = 0;
var catMax = Object.keys(database).length;
var sportsMax = Object.keys(database['sports']['questions']).length;
var politicsMax = Object.keys(database['politics']['questions']).length;
var foodMax = Object.keys(database['food']['questions']).length;
var mediaMax = Object.keys(database['media']['questions']).length;
var wyrMax = Object.keys(database['wyr']['questions']).length;
var lifestyleMax = Object.keys(database['lifestyle']['questions']).length;
var miscMax = Object.keys(database['misc']['questions']).length;
//console.log("text===",database['politics']['questions'][0].text);
function loadRandSportsQuestion(min, sportsMax) {
   return Math.floor(Math.random() * (sportsMax-min)) + min; };
function loadRandpoliticsQuestion(min, politicsMax) {
  return Math.floor(Math.random() * (politicsMax-min)) + min; };
function loadRandFoodQuestion(min, foodMax) {
  return Math.floor(Math.random() * (foodMax-min)) + min; };
function loadRandMediaQuestion(min, mediaMax) {
  return Math.floor(Math.random() * (mediaMax-min)) + min; };
function loadRandWYRQuestion(min, wyrMax) {
  return Math.floor(Math.random() * (wyrMax-min)) + min; };
function loadRandLifestyleQuestion(min, lifestyleMax) {
  return Math.floor(Math.random() * (lifestyleMax-min)) + min; };
function loadRandMiscQuestion(min, miscMax) {
  return Math.floor(Math.random() * (miscMax-min)) + min; };

app.get('/',function(req, res, next) {
    var randSport = loadRandSportsQuestion(min, sportsMax);
    var randPolitic = loadRandpoliticsQuestion(min, politicsMax);
    var randFood = loadRandFoodQuestion(min, foodMax);
    var randMedia = loadRandMediaQuestion(min, mediaMax);
    var randWYR = loadRandWYRQuestion(min, wyrMax);
    var randLifestyle = loadRandLifestyleQuestion(min, lifestyleMax);
    var randMisc = loadRandMiscQuestion(min, miscMax);
//res.status(200).render('homepage', {database:[database['politics']]});
//res.status(200).render('homepage', {database});
res.status(200).render('homepage', {
  database:[database['sports']['questions'][randSport]],
  database:[database['politics']['questions'][randPolitic]],
  database:[database['food']['questions'][randFood]],
  database:[database['media']['questions'][randMedia]],
  database:[database['wyr']['questions'][randWYR]],
  database:[database['lifestyle']['questions'][randLifestyle]],
  database:[database['misc']['questions'][randMisc]]}
  );
//    res.status(200).render('homepage', {database:[database['sports']['questions'][randSport]]});
});

app.get('/create_question', function(req, res, next) {
    res.status(200).render('createQuestion');
});


app.get('/answer_question/:category/:number', function (req, res, next) {
    var cat = req.params.category.toLowerCase();
    var num = req.params.number;
    if (database[cat] && num >= 0 && num < database[cat].questions.length) {
        var question = database[cat].questions[num];
        res.status(200).render('answerQuestion', {
		question: question.text,
		Ans1: question.choices[0].option,
		Ans2: question.choices[1].option,
		Ans1s: question.choices[0].num,
		Ans2s: question.choices[1].num
	});
    }
    else {
        res.status(404).render('404');
    }
});

app.get('/answer_question/:category', function (req, res, next) {
    var cat = req.params.category.toLowerCase();
    if (database[cat]) {
	    var nameL = database[cat].name;
	    var questionsA = database[cat].questions;
	    var questionsB = [];
	    for (var i = 0; i < questionsA.length; i++) {
	        questionsB.push({
	            choices: questionsA[i].choices,
	            author: questionsA[i].author,
	            text: questionsA[i].text,
	            cat: cat,
                num: i
	        })
	    }
        res.status(200).render('categoryQList', {
		name: nameL,
		questions: questionsB
	});
    }
    else {
        res.status(404).render('404');
    }
});

app.get('/categories', function(req, res, next) {
    res.status(200).render('categories');
});


app.get('/stats/:username', function(req, res, next){
  var username = req.params.username;
  var questionObjects = [];
  var listCat = ["sports", "politics", "food", "media", "wyr", "lifestyle", "misc"]
  for (var i = 0; i < 7; i++){
    for (var j = 0; j < database[listCat[i]].questions.length; j++){
      if (database[listCat[i]].questions[j].author){
        if (database[listCat[i]].questions[j].author === username){
          questionObjects.push(database[listCat[i]].questions[j]);
        }
      }
    }
  }
    res.status(200).render('statsPage', {questionObjects: questionObjects});

});




app.get('*',function(req, res, next){
	res.status(404).render('404');
});

app.get('*', function(req, res, next)   {
    res.status(404).render('404');
});

app.post('/:category/create_question/add_question', function(req, res, next){
  if (req.body){
    var category = req.params.category.toLowerCase();
    if (database[category]) {
      fs.readFile('questionData.json', 'utf8', function(err, data){
        if (err){
          console.log(err);
        } else {
          var obj = JSON.parse(data);
          obj[category].questions.push({
            text: req.body.text,
            author: req.body.author,
            choices: req.body.choices
          });
          json = JSON.stringify(obj, null, 3);
          fs.writeFile('questionData.json', json, 'utf8', function(){});
        }
      });
      res.status(200).send("Question successfully added");
      console.log("Question successfully added");
    } else {
      next();
    }
  }else {
    res.status(400).send({
      error: "Request body needs to be in an appropriate category."
    });
  }
});

app.listen(PORT, function(err) {
  if(err) {
    throw err;
  }
  console.log("== Server is listening on PORT", PORT);
});
