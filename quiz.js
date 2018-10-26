var quiz = [
  ['What is your name?', 'Carson'],
  ['What is your quest?', 'Holy Grail'],
  ['What is your favorite color?', 'Green']
]

var correct = 0;
var wrong = 0;

for (var i = 0; i < 3; i += 1) {
  var ans = prompt(quiz[i][0]);
  if (ans === quiz[i][1]){
    alert('Correct!');
    correct += 1;
    print('<p>You answered ' + quiz[i][0] + ' correctly.</p>');
  } else {
    alert('Wrong!');
    wrong += 1;
    print('<p>You answered ' + quiz[i][0] + ' incorrectly.</p>');
  }
}

print('You answered ' + correct + ' out of 3 questions correctly! Good job!');
function print(message) {
  document.write(message);
}
