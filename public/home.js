var questions = fs.readFile('/questionData.json');

var random = Math.floor(Math.random() * questions.length);
var randQuestion = questions[random];
