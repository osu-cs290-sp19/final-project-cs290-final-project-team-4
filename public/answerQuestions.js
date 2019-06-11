console.log("answerQuestions.js loaded");

var answerChoices = document.getElementsByClassName('answer-choice-event-button');
var answerStatsBoxes = document.getElementsByClassName('answer-stats-box');
var dontAnswer = document.querySelector('.dont-answer-button');
var homePageQIndex = document.getElementsByClassName('HPQuestionIndex');    /*  array of question indices*/
var homePageQLength = document.getElementsByClassName('HPQuestionLength');  /*  array of # choices per question*/
var homePageQuestions = document.getElementsByClassName('homepageQuestion');        /*  array of qeustions*/
var homePageAnswers = document.getElementsByClassName('homepageAnswer');     /*  array of all answers (not segmented by questions*/
var homeCovers = document.getElementsByClassName('homeQuestionFiller');

for (var z = 0; z < homePageQIndex.length; z++) {
    homePageQIndex[z].classList.add('hidden');
}

for (var x = 0; x < homePageQLength.length; x++) {
    homePageQLength[x].classList.add('hidden');
}

for (var y = 0; y < answerStatsBoxes.length; y++){
  answerStatsBoxes[y].classList.add('hidden');
}

var catList = ["sports", "politics", "food", "media", "wyr", "lifestyle", "misc"];

function changeDBStats(answerNumber){
  var newAnswerCategory = null, questionNumber = null;
  var path = window.location.pathname;
  var pathParts = path.split('/');
  if (pathParts[1] === "answer_question"){
    newAnswerCategory = pathParts[2];
    questionNumber = pathParts[3];
  }
  var request = new XMLHttpRequest();
  var url = '/answer_question/' + newAnswerCategory + '/' + questionNumber + '/' + answerNumber;
  console.log("url = ", url);
  request.open('POST', url);
  request.send();
}

function changeDBStatsHome(catNumber, choiceNumber) {
    var questionCategory = catList[catNumber];
    var questionNumber = homePageQIndex[catNumber].innerHTML;
    var request = new XMLHttpRequest();
    var url = '/answer_question/' + questionCategory + '/' + questionNumber + '/' + choiceNumber;
    console.log("url = ", url);
    request.open('POST', url);
    request.send();
}

function choicesToStats(){
    for (var x = 0; x < answerStatsBoxes.length; x++) {
        if (answerChoices) {
            answerChoices[x].classList.toggle('hidden');
        }
        answerStatsBoxes[x].classList.toggle('hidden');
        if (dontAnswer) {
            dontAnswer.textContent = "Next Question";
        }
  }
}

function updateStatDisplay(questionNumber){
  var answerPercentage = Number(answerStatsBoxes[questionNumber].querySelector('.percentage').textContent);
  console.log("answerPercentage ", answerPercentage);
  answerPercentage++;
  answerStatsBoxes[questionNumber].querySelector('.percentage').textContent = answerPercentage;
}

function answerSelectedHP(event) {
    var k = 0;
    for (var i = 0; i < homePageQuestions.length; i++) {
        for (var j = 0; j < Number(homePageQLength[i].innerHTML); j++) {
            if (event.target == answerChoices[k]) {
                console.log("Answer ", j, " of category", i, "selected");
                changeDBStatsHome(i, j);
                homePageQuestions[i].classList.add('hidden');
                homeCovers[i].classList.remove('hidden');
            }
            k++;
        }
    }
}

function answerSelected (event){
  for (var i = 0; i < answerChoices.length; i++){
    if (event.target == answerChoices[i]){
      console.log("You have selected answer choice ", i);
        updateStatDisplay(i);
        choicesToStats();
        changeDBStats(i);
    }
    if (event.target == dontAnswer){
      console.log("You have decided not to answer");
    }
  }
}

var answerContainer = document.querySelector('.answer-event-box');
if (answerContainer) {
    if (window.location.pathname == '/'){
        answerContainer.addEventListener('click', answerSelectedHP);
        console.log('Using homepage answer listener');
    }else{
        answerContainer.addEventListener('click', answerSelected);
        console.log('Using answer question answer listener');
    }
}

for (var i = 0; i < answerChoices.length; i+=2){
  answerChoices[i].classList.toggle('orangeChoice');
  answerStatsBoxes[i].classList.toggle('orangeStat');
}
