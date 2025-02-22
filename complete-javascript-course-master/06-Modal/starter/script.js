'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

function modalHidden() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

function modalVisible() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', modalVisible);
}

btnCloseModal.addEventListener('click', modalHidden);

overlay.addEventListener('click', modalHidden);
