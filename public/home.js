/* This is the js file for the homepage*/
<<<<<<< HEAD
console.log("home js loaded");
function getUserIdFromURL() {
   var path = window.location.pathname;
   var pathParts = path.split('/');
   if(pathParts[1] === "users") {
     return pathParts[2];
   } else {
     return null;
   }
}

function handleLoginClick(){
   var username = document.getElementById('login-username').value;
   var password = document.getElementById('login-password').value;

   if (!username || !password){
     alert("You must fill in all of the fields!");
   } else {
     var postRequest = new XMLHttpRequest();
     var requestURL = '/users/' + getUserIdFromURL() + '/login';
     postRequest.open('POST', requestURL);

     var requestBody = JSON.stringify({
        username: username,
        password: password
     });

     postRequest.setRequestHeader('Content-Type', 'application/json');
     postRequest.send(requestBody);
     }
}


var loginButton = document.querySelector(".nav-item.nav-log");

console.log(loginButton);


   loginButton.addEventListener('click', handleLoginClick);



=======
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

>>>>>>> f49e439929db8f53be2f36984011d0a4637e8a90
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
