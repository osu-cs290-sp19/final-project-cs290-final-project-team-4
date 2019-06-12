var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var fs = require('fs');
var shuffleArray = require('shuffle-array');
var Chart = require('chart.js');
var MongoClient = require('mongodb').MongoClient;


var mongoHost = process.env.MONGO_HOST || "classmongo.engr.oregonstate.edu";
var mongoPort = process.env.MONGO_PORT || 27017;
var mongoUser = process.env.MONGO_USER || "cs290_kaneshke";
var mongoPassword = process.env.MONGO_PASSWORD || "cs290_team4";
var mongoDBName = process.env.MONGO_DB_NAME || "cs290_kaneshke";


var mongoURL = `mongodb://${mongoUser}:${mongoPassword}@${mongoHost}:${mongoPort}/${mongoDBName}`;
var db = null;

var app = express();
var PORT = process.env.PORT || 39270;

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
/*
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
*/
app.post('/:category/create_question/add_question', function(req, res, next){
  var category = req.params.category.toLowerCase();
  if (req.body && req.body.text && req.body.author && req.body.choices){
    var categoryBin = db.collection(category);
    var obj = {
      text: req.body.text,
      author: req.body.author,
      choices: req.body.choices
    };
    categoryBin.updateOne(
      {name: category},
      {$push: {obj}},
      function (err, result) {
        if(err) {
          res.status(500).send({
            error: "Error inserting question into DB"
          });
        }else{
          console.log("==update result:", result);
          if(result.matchedCount > 0) {
            res.status(200).send("Success");
          }else{
            next();
          }
        }
      }
    );
  }
});
/*
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
});
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
*/
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
  });});

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
        res.status(200).render('answerQuestion', {
		question: question.text,
		Ans1: question.choices[0].option,
		Ans2: question.choices[1].option,
		Ans1s: question.choices[0].num,
		Ans2s: question.choices[1].num,
    cat: cat,
    num: numInt
	});
    }
    else {
        res.status(404).render('404');
    }
});

app.get('/answer_question/:category', function (req, res, next) {
    var category = req.params.category.toLowerCase();
    var collection = db.collection(category);
    collection.find({}).toArray(function (err, questions){
      if (err) {
        res.status(500).send({
          error: "Error fetching questions from DB"
        });
       } else {
         console.log("==questions:", category);
         res.status(200).render('categoryQList', {
           questions: questions
         });
       }
        });
    });

app.get('/categories', function(req, res, next) {
    res.status(200).render('categories');
});

app.post('/users/:userId/login', function(req, res, next){
    var userId = req.params.userId.toLowerCase();
    if(req.body && req.body.username && req.body.password){
         var userInfo = {
           username: req.body.username,
           password: req.body.password
         };
         var user = db.collection('users');
         user.updateOne(
           { userId: userId },
           { $push: { user: userInfo } },
           function (err, result) {
              if (err) {
                res.status(500).send({
                    error: "Error inserting user info into DB."
                });
              }else{
                res.status(200).send("Success");
              }
            }
         );
    }else{
        res.status(400).send("Login must have both username and password");
    }
});

app.get('/stats/:username', function(req, res, next){
  var username = req.params.username;
  var collection = db.collection('sports');
  console.log(collection.find ({}) .pretty)
  collection.find( { author: username } ).toArray(function (err, questions){
    if(err){
      res.status(500).send({
        error: "Error fetching user from DB"
      });
    } else {
      res.status(200).render('statsPage', questions);
    }
  });

/*

    });
  });
   console.log("questions = ", questions);
  questions.find({author: username}).toArray(function(err, questionsByAuthor){
    if(err){
      res.status(500).send({
        error: "Error fetching user from DB"
      });
    } else if(questions.length < 1){
      console.log("Array too small!");
      next();
    }else{
      */

  /*  }
  });
  */
});


app.get('*',function(req, res, next){
  res.status(404).render('404');
});

app.post('/answer_question/:category/:questionNumber/:answerNumber', function(req, res, next){
    var category = req.params.category.toLowerCase();
    var questionNumber = req.params.questionNumber;
    var questionNumberInt = Number(questionNumber);

    var answerNumber = req.params.answerNumber;
    var answerNumberInt = Number(answerNumber);
    var collection = db.collection(category);

    collection.updateOne(
      { name: category},
      { questions: questions[questionNumberInt]},
      { choices: choices[answerNumberInt]},
      {$push: {num: num+1}},
      function(err, result) {
        if(err) {
          res.status(500).send({
            error: "Error adding vote to number"
          });
        } else {
          console.log("== update result:", result);
          if(result.matchedCount > 0) {
            res.status(200).send("Success");
            console.log("Success");
          } else {
            next();
          }
        }
      }
    );
});

MongoClient.connect(mongoURL, { useNewUrlParser: true }, function (err, client){
  if (err) {
   throw err;
  }
  db = client.db(mongoDBName);
  app.listen(PORT, function () {
    console.log("== Server listening on port", PORT);
  });
});
