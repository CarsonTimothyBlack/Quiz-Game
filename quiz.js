var quiz = [
  ['What is your name?', 'Carson'],
  ['What is your quest?', 'Holy Grail'],
  ['What is your favorite color?', 'Green']
];

var correct = [];
var wrong = [];
var correctAnswers = 0;
var question;
var answer;
var response;
var html;

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function buildList(arr) {
  var listHTML = '<ol>';
    for (var i = 0; i < arr.length; i += 1) {
      listHTML += '<li>' + arr[i] + '</li>';
  }
  listHTML += '</ol>'
  return listHTML;
}

for (var i = 0; i < quiz.length; i += 1) {
  question = quiz[i][0];
  answer = quiz[i][1];
  response = prompt(question);
  if (response === answer) {
    correctAnswers += 1;
    correct.push(question);
  } else {
    wrong.push(question);
  }
}

html = "You got " + correctAnswers + " question(s) right."
html += '<h2>You got these questions correct:</h2>';
html += buildList(correct);
html += '<h2>You got these questions wrong:</h2>'
html += buildList(wrong);
print(html);
