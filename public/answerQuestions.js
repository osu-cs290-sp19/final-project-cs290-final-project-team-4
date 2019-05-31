
var answerChoices = document.getElementsByClassName('answer-choice-button');
var answerStatsBoxes = document.getElementsByClassName('answer-stats-box');
var dontAnswer = document.querySelector('.dont-answer-button');

for (var y = 0; y < answerStatsBoxes.length; y++){
  answerStatsBoxes[y].classList.add('hidden');
}

function choicesToStats(){
  for (var x = 0; x < answerStatsBoxes.length; x++){
    answerChoices[x].classList.toggle('hidden');
    answerStatsBoxes[x].classList.toggle('hidden');
    dontAnswer.textContent = "Next Question";
  }
}

function answerSelected (event){
  for (var i = 0; i < answerChoices.length; i++){
    if (event.target == answerChoices[i]){
      console.log("You have selected answer choice ", i);
      choicesToStats();
    }
    if (event.target == dontAnswer){
      console.log("You have decided not to answer");
    }
  }
}

var answerContainer = document.querySelector('.answerContainer');
answerContainer.addEventListener('click', answerSelected);


for (var i = 0; i < answerChoices.length; i+=2){
  answerChoices[i].classList.toggle('orangeChoice');
  answerStatsBoxes[i].classList.toggle('orangeStat');
}
