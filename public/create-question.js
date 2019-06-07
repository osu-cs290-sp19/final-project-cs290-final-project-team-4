// JavaScript source code

console.log("js loaded");

function handlePostQuestionClick(){
  console.log('click');
  var newQuestionText = document.getElementById('newQuestionQues').value;
  var newQuestionFirstAnswer = document.getElementById('newQuestionRes1').value;
  var newQuestionSecondAnswer = document.getElementById('newQuestionRes2').value;
  var newQuestionAuthor = document.getElementById('newQuestionAuth').value;
  var newQuestionCategory = document.getElementById('newQuestionCategory').value;

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

var acceptButton = document.getElementById("postQuestionButton");
acceptButton.addEventListener('click', handlePostQuestionClick);

var questionStatsContainers = document.getElementsByClassName("question-stats-container");
questionStatsContainers.forEach(function(element){
  var answerPercentages = element.getElementsByClassName("answer-percentage");
  var totalAnswers = 0;
  answerPercentages.forEach(function(ele){
    totalAnswers += ele.value;
  });
  answerPercentages.forEach(function(elem){
    elem.value = (elem.value / totalAnswers);
  });
  totalAnswers = 0;
});
