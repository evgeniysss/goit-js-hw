

'use strict';

// const ourCategories = document.querySelector('#categories > li');
const liItem = document.querySelectorAll('.item');
console.log (`В списке ${liItem.length}`);
console.log ('liItem', liItem);
liItem.forEach(el => {
  console.log('Category :', el.querySelector('h2').textContent);
  console.log('Quantity :', el.querySelectorAll("ul > li").length);
})