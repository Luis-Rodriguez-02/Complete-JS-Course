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

document.addEventListener('keydown', function (e) {
  // every time event occurs an object is created and we can access that event object inside the handler function
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      modalHidden();
    }
  }
});
