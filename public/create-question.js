// JavaScript source code

console.log("js loaded");

function handlePostQuestionClick(){
  console.log('click');
  var newQuestionText = document.getElementById('newQuestionQues').value;
  var newQuestionFirstAnswer = document.getElementById('newQuestionRes1').value;
  var newQuestionSecondAnswer = document.getElementById('newQuestionRes2').value;
  var newQuestionAuthor = document.getElementById('newQuestionAuth').value;
  var newQuestionCategory = document.getElementById('newQuestionCategory').value.toLowerCase();

  if (newQuestionCategory === "Movies & TV")
      newQuestion = "media";
  else if (newQuestionCategory === "Would You Rather?")
      newQuestion = "wyr";


  if (!newQuestionText || !newQuestionAuthor || !newQuestionFirstAnswer || !newQuestionSecondAnswer){
    alert("You must fill in all of the fields!");
  } else {
    var request = new XMLHttpRequest();
    var url = '/' + newQuestionCategory + '/create_question/add_question';
    request.open('POST', url);

    var newQuestion = {
      text: newQuestionText,
      author: newQuestionAuthor,
      choices: [
        {
          option: newQuestionFirstAnswer,
          num: 0
        },
        {
          option: newQuestionSecondAnswer,
          num: 0
        }
      ]
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

/* Stats Page JS */

var acceptButton = document.getElementById("postQuestionButton");
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
