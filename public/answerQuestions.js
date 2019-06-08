console.log("answerQuestions.js loaded");

var answerChoices = document.getElementsByClassName('answer-choice-event-button');
var answerStatsBoxes = document.getElementsByClassName('answer-stats-box');
var dontAnswer = document.querySelector('.dont-answer-button');

for (var y = 0; y < answerStatsBoxes.length; y++){
  answerStatsBoxes[y].classList.add('hidden');
}

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

function choicesToStats(){
  for (var x = 0; x < answerStatsBoxes.length; x++){
    answerChoices[x].classList.toggle('hidden');
    answerStatsBoxes[x].classList.toggle('hidden');
    dontAnswer.textContent = "Next Question";
  }
}

function updateStatDisplay(questionNumber){
  var answerPercentage = Number(answerStatsBoxes[questionNumber].querySelector('.percentage').textContent);
  console.log("answerPercentage ", answerPercentage);
  answerPercentage++;
  answerStatsBoxes[questionNumber].querySelector('.percentage').textContent = answerPercentage;
}

function answerSelected (event){
  for (var i = 0; i < answerChoices.length; i++){
    if (event.target == answerChoices[i]){
      console.log("You have selected answer choice ", i);
      if (answerStatsBoxes){
        updateStatDisplay(i);
        choicesToStats();
        changeDBStats(i);
      }
    }
    if (event.target == dontAnswer){
      console.log("You have decided not to answer");
    }
  }
}

var answerContainer = document.querySelector('.answer-event-box');
if(answerContainer){
  answerContainer.addEventListener('click', answerSelected);
}

for (var i = 0; i < answerChoices.length; i+=2){
  answerChoices[i].classList.toggle('orangeChoice');
  answerStatsBoxes[i].classList.toggle('orangeStat');
}
