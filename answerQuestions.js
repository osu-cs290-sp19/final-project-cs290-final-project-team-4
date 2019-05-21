
var answerChoices = document.getElementsByClassName('answer-choice-button');
var dontAnswer = document.querySelector('.dont-answer-button');
function answerSelected (event){
  for (var i = 0; i < answerChoices.length; i++){
    if (event.target == answerChoices[i]){
      console.log("You have selected answer choice ", i);
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
}
