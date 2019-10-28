import menuArr from './menuArr.js';
import menuTemplate from '../templates/dishes.hbs';
//

console.log(menuArr);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const menuItems = menuTemplate(menuArr);
console.log(menuItems);

const menuDishes = document.querySelector('#menu');
console.log(menuDishes);
menuDishes.insertAdjacentHTML('afterbegin', menuItems);


