

'use strict';

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://eimages.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// let sum = '';
// const ul = document.querySelector("#ingredients");
// ingredients.forEach(el => sum += `<li> ${el} </li>`);
// ul.insertAdjacentHTML("afterbegin", sum);



// const unlist = document.querySelector('#gallery');
// let imgStr = '';
// images.forEach (el => {
// const img = document.createElement('img');
// img.src = el.url;
// imgStr += `<li> ${img} </li>`;
// })
// unlist.insertAdjacentHTML ('afterbegin', imgStr)


const list = document.querySelector("#gallery");
let imgStr = "";
images.forEach(el => {
//  const img = document.createElement("img");
//  img.src = el.url;
 imgStr += `<li><img src=${el.url} alt=${el.alt}></li>`;
});
list.insertAdjacentHTML("afterbegin", imgStr);