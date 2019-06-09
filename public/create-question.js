// JavaScript source code

console.log("js loaded");

function handlePostQuestionClick(){
  console.log('click');
  var newQuestionText = document.getElementById('newQuestionQues').value;
  /*
  var newQuestionFirstAnswer = document.getElementById('newQuestionRes1').value;
  var newQuestionSecondAnswer = document.getElementById('newQuestionRes2').value;
  */
  var newQuestionAuthor = document.getElementById('newQuestionAuth').value;
  var newQuestionCategory = document.getElementById('newQuestionCategory').value.toLowerCase();
  var newQuestionAnswers = document.querySelectorAll('#newQuestionRes');

  if (newQuestionCategory === "Movies & TV")
      newQuestion = "media";
  else if (newQuestionCategory === "Would You Rather?")
      newQuestion = "wyr";


  if (!newQuestionText || !newQuestionAuthor || !newQuestionAnswers){
    alert("You must fill in all of the fields!");
  } else if (!newQuestionAnswers[0] || !newQuestionAnswers[1]) {
    alert("You must fill in at least the first two answer fields!");
  } else {
    var request = new XMLHttpRequest();
    var url = '/' + newQuestionCategory + '/create_question/add_question';
    request.open('POST', url);

    var choices = [];
    newQuestionAnswers.forEach(function (element, index){
      choices.push({
        option: element.value,
        num: 0
      });
    });

    var newQuestion = {
      text: newQuestionText,
      author: newQuestionAuthor,
      choices: choices
    };
    console.log(newQuestion);

    var requestBody = JSON.stringify(newQuestion);

    request.addEventListener('load', function (event){
      if (!event.target.status === 200){
        var message = event.target.response;
        alert("Error storing question on server: " + message);
      }
    });

    request.setRequestHeader('Content-Type', 'application/json');
    request.send(requestBody);
    alert("Your Question has been Submitted!");

    document.getElementById('newQuestionQues').value = "";
    document.getElementById('newQuestionAuth').value = "";
    document.getElementById('newQuestionRes1').value = "";
    document.getElementById('newQuestionRes2').value = "";
    document.getElementById('newQuestionCategory').value = "";
  }

}

var textContainer = document.querySelector('.textContainer');
if (textContainer){
  var textContainerHTML = textContainer.innerHTML;
}

function addAnswerChoice(event){
  var questionAnswerBoxes = document.querySelectorAll('#newQuestionRes');
  if (questionAnswerBoxes.length >= 4){
    alert("You can have a maximum of 4 answer choices.");
  } else {
    var newTextContainer = document.createElement('div');
    var responsesContainer = document.querySelector('.responses-container');
    newTextContainer.classList.add('textContainer');
    newTextContainer.innerHTML = textContainerHTML;
    responsesContainer.appendChild(newTextContainer);
  }
}

var addAnswerChoiceButton = document.querySelector('.add-answer-choice-button');
if (addAnswerChoiceButton){
  addAnswerChoiceButton.addEventListener('click', addAnswerChoice);
}

/* Stats Page JS */

var acceptButton = document.querySelector('.postQuestionButton');
if (acceptButton){
  acceptButton.addEventListener('click', handlePostQuestionClick);
}

var myChart = null, questionStatsChart = null;
var data = [], labels = [];
var questionStatsContainers = document.querySelectorAll('.question-stats-container');
questionStatsContainers.forEach( function (element, index, array){
  var answerPercentageBoxes = element.querySelectorAll('.answer-percentage-box');
  answerPercentageBoxes.forEach( function (ele){
    data.push(Number(ele.querySelector('.answer-percentage').textContent));
    labels.push(ele.querySelector('.answer-percentage-option').textContent);
  });
  console.log("data = ", data);
  console.log("labels = ", labels);
  questionStatsChart = element.querySelector('#question-stats-chart');
  myChart = new Chart(questionStatsChart, {
    type: 'pie',
    data: {
      labels: labels,
      datasets: [{

        data: data,
        backgroundColor: [
          'rgb(255, 153, 51)',
          'rgb(204, 0, 255)'
        ],
        backgroundColorHover: [
          '#ff8000',
          '#e066ff'
        ],
        borderColor: 'black',
        borderWidth: 1
      }],
    },

    options:{
      animation:{
        animateRoatate: true,
        animateScale: true
      }
    }

  });
  console.log(myChart);
  data = [], labels = [];
});
