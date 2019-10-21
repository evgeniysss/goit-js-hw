// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>
// В JS есть массив строк.

// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, 
// после чего вставит все li за одну операцию в список ul.ingredients. 
// Для создания DOM-узлов используй document.createElement().

'use strict';

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// Первый вариант решения

// const ulList = document.querySelector('#ingredients');
// const fragment = document.createDocumentFragment();
// console.log('ulList :', ulList);

// ingredients.forEach(el => {
//   const li = document.createElement('li');
//   li.textContent = el;
//   fragment.append(li);
//   // console.log('li :', li);
//   // ulList.append(li);
// })
// ulList.appendChild(fragment);



// Второй вариант решения

// const ulList = document.querySelector('#ingredients');
// console.log('ulList :', ulList);
// ingredients.forEach(el => {
//   const li = document.createElement('li');
//   li.textContent = el;
//   console.log('li :', li);
//   ulList.append(li);
// })


// Третий вариант


let sum = '';
const ul = document.querySelector("#ingredients");
ingredients.forEach(el => sum += `<li> ${el} </li>`);
ul.insertAdjacentHTML("afterbegin", sum);