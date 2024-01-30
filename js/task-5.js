'use strict';

const btnEl = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
const spanEl = document.querySelector('.color');

btnEl.addEventListener('click', changeColor);

function changeColor() {
  const changeClr = (bodyEl.style.backgroundColor =
    getRandomHexColor());
  spanEl.textContent = changeClr;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
