/* This is the js file for the homepage*/
/* navbar bars functionality */
var barsIcon = document.querySelector('.bars-icon');
if(barsIcon){
  barsIcon.addEventListener('click', function (event){
    var x = document.querySelector('.nav-list');
    if (x.className === "nav-list") {
      x.className += " responsive";
    } else {
      x.className = "nav-list";
    }
  });
}

var questionBoxes = document.querySelectorAll('.question-content');
var questionAnswers = [], diceImage = null;
if (questionBoxes){
  questionBoxes.forEach(function (element, index) {
    questionAnswers = element.querySelectorAll('.question-dice');
    if (questionAnswers){
      questionAnswers.forEach(function (element, index) {
        diceImage = element.querySelector('i');
        if (index % 2 === 1){
          diceImage.classList.remove('fa-dice-one');
          element.classList.add('answer-two-icon');
          element.classList.remove('answer-one-icon');
          if (index % 3 === 0){
            diceImage.classList.add('fa-dice-four');
          } else {
            diceImage.classList.add('fa-dice-two');
          }
        } else {
          if ((index + 2) % 4 === 0){
            diceImage.classList.remove('fa-dice-one');
            diceImage.classList.add('fa-dice-three');
          }
        }
      });
    }
  });
}
