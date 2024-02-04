'use strict';
const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', inputHandler);

function inputHandler() {
  let inputValueTrim = inputEl.value.trim();
  if (inputValueTrim === '') {
    outputEl.textContent = 'Anonymous';
  } else {
    outputEl.textContent = inputValueTrim;
  }
}
