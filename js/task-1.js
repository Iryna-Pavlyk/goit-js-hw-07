'use strict';

const item = document.querySelectorAll('.item');

const result = `Number of categories: ${item.length}`;
console.log(result);

for (const i of item) {
  console.log(
    `Category: ${i.querySelector('h2').textContent}`
  );
  console.log(
    `Elements: ${i.querySelectorAll('li').length}`
  );
}
