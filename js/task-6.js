'use strict';

const divBoxesEl = document.querySelector('#boxes');
const inputEl = document.querySelector('input');
const createBtnEl = document.querySelector(
  'button[data-create]'
);
const destroyBtnEl = document.querySelector(
  'button[data-destroy]'
);

createBtnEl.classList.add('create');
destroyBtnEl.classList.add('destroy');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes(amount) {
  destroyHandler();
  amount = inputEl.value;
  inputEl.value = '';
  let boxSize = 30;
  if (amount >= 1 && amount <= 100) {
    for (let i = 0; i < amount; i++) {
      const div = document.createElement('div');
      div.style.width = `${boxSize}px`;
      div.style.height = `${boxSize}px`;
      div.style.backgroundColor = getRandomHexColor();
      divBoxesEl.append(div);
      boxSize += 10;
    }
  }
}

function destroyHandler() {
  divBoxesEl.innerHTML = '';
}

createBtnEl.addEventListener('click', createBoxes);
destroyBtnEl.addEventListener('click', destroyHandler);
