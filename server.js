var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var fs = require('fs');
var Chart = require('chart.js');
var shuffleArray = require('shuffle-array')

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

function getRandNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

app.get('/', function (req, res, next) {
    var RSports = getRandNum(min, sportsMax);
    var RPolitics = getRandNum(min, politicsMax);
    var RFood = getRandNum(min, foodMax);
    var RMedia = getRandNum(min, mediaMax);
    var RWyr = getRandNum(min, wyrMax);
    var RLifestyle = getRandNum(min, lifestyleMax);
    var RMisc = getRandNum(min, miscMax);

    var randSport = database.sports.questions[RSports];
    var randPolitic = database.politics.questions[RPolitics];
    var randFood = database.food.questions[RFood];
    var randMedia = database.media.questions[RMedia];
    var randWYR = database.wyr.questions[RWyr];
    var randLifestyle = database.lifestyle.questions[RLifestyle];
    var randMisc = database.misc.questions[RMisc];

    var qArrayNum = [{ num: RSports, len: randSport.choices.length }, { num: RPolitics, len: randPolitic.choices.length },
                        { num: RFood, len: randFood.choices.length }, { num: RMedia, len: randMedia.choices.length },
                        { num: RWyr, len: randWYR.choices.length }, { num: RLifestyle, len: randLifestyle.choices.length },
                        { num: RMisc, len: randMisc.choices.length }]
    var qArray = [randSport,randPolitic,randFood,randMedia,randWYR,randLifestyle,randMisc];

    res.status(200).render('homepage', {
        qArray: qArray,
        qArrayNum: qArrayNum
    });

});

app.get('/create_question', function(req, res, next) {
    res.status(200).render('createQuestion');
});


app.get('/answer_question/:category/:number', function (req, res, next) {
    var cat = req.params.category.toLowerCase();
    var num = req.params.number;
    var numInt = Number(num) + 1;
    if (numInt >= database[cat].questions.length) {
      numInt = 0;
    }
    if (database[cat] && num >= 0 && num < database[cat].questions.length) {
        var question = database[cat].questions[num];
        var answers = [], answerPercentages = [];
        res.status(200).render('answerQuestion', {
		question: question.text,
		choices: question.choices,
    cat: cat,
    num: numInt
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
      shuffleArray(questionsB);
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

  app.post('/answer_question/:category/:questionNumber/:answerNumber', function(req, res, next){
    var category = req.params.category.toLowerCase();
    var questionNumber = req.params.questionNumber;
    var questionNumberInt = Number(questionNumber);

    var answerNumber = req.params.answerNumber;
    var answerNumberInt = Number(answerNumber);
    if (database[category] && questionNumber < database[category].questions.length &&
      answerNumber < database[category].questions[questionNumber].choices.length){
        fs.readFile('questionData.json', 'utf8', function(err, data){
          if (err){
            res.status(500).send("Server Error");
          } else {
            var obj = JSON.parse(data);
            obj[category].questions[questionNumber].choices[answerNumber].num++;
            json = JSON.stringify(obj, null, 3);
            fs.writeFile('questionData.json', json, 'utf8', function () { });
            database[category].questions[questionNumber].choices[answerNumber].num++;
          }
        });
      } else {
        next();
      }
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
          fs.writeFile('questionData.json', json, 'utf8', function () { });
          database[category].questions.push({
              text: req.body.text,
              author: req.body.author,
              choices: req.body.choices
          });
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
