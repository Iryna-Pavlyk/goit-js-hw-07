'use strict';

const items = document.querySelectorAll('.item');

const result = `Number of categories: ${items.length}`;
console.log(result);

for (const i of items) {
  console.log(
    `Category: ${i.querySelector('h2').textContent}`
  );
  console.log(
    `Elements: ${i.querySelectorAll('ul > li').length}`
  );
}
