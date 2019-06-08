/* This is the js file for the homepage*/
function get UserIdFromURL() {
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
var loginButton = document.querySelector("nav-item nav-log");
if(loginButton){
   loginButton.addEventListener('click', handleLoginClick);
}





