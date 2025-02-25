'use strict';

// selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
// button elements
const resetBtn = document.querySelector('.btn--new');
const holdBtn = document.querySelector('.btn--hold');
const rollBtn = document.querySelector('.btn--roll');

// current scores
let currentScore = 0;

function resetGame() {
  score0El.textContent = 0;
  score1El.textContent = 0;
  dice.classList.add('hidden');
}

resetGame();

// reset button functionality
resetBtn.addEventListener('click', resetGame);

// roll dice functionaility
rollBtn.addEventListener('click', () => {
  // 1. generate rand
  let roll = Math.trunc(Math.random() * 6) + 1;

  // display dice
  dice.classList.remove('hidden');
  dice.src = `dice-${roll}.png`;
  console.log(roll);

  // check for roll 1:
  if (roll !== 1) {
    // add dice to current score
    currentScore += roll;
    current0El.textContent = currentScore; // change later
  } else {
    // switch to next player
  }
});
