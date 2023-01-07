'use strict';

/*
console.log(document.querySelector('.message').textContent);

// To change innerText of .message & with some examples.
document.querySelector('.message').textContent = 'Correct Number 🎉';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

// to get the values from input field we use .value property instead of .textContent
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 90;

*/

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(secretNumber);
  if (!guess) {
    // when null input :(remember by default it is 0 )
    displayMessage('⛔ No Number !');
  } else if (guess === secretNumber) {
    // if correct guess
    displayMessage('Correct Number 🎉');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    highScore = score > highScore ? score : highScore;
    document.querySelector('.highscore').textContent = highScore;
  } else if (guess !== secretNumber && score > 1) {
    displayMessage(guess > secretNumber ? 'Too High !📈' : 'Too Low ! 📉');
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    // score exhausted / crossed less score
    displayMessage('You Lost the Game 🤯');
    document.querySelector('.score').textContent = 0;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  // to set the input value to empty string.
  document.querySelector('.guess').value = '';
});
