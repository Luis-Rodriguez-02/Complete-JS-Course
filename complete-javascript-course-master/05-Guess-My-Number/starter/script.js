'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 19;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
document.querySelector('.guess').value;
*/

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⚠️ No Number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number! 🎊';

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) highScore = score;

    document.querySelector('.highscore').textContent = highScore;
    // when player wins -> change background
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too high! 📈' : 'Too low! 📉';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost! 😭';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// game reset, reset lives
const againBtn = document
  .querySelector('.again')
  .addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);

    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing.....';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';

    document.querySelector('.guess').value = '';
  });
