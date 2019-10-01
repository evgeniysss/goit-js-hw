'use strict';
let input;
let total = 0;
let an;

while (input !== null) {
  input = prompt('Введите число ', '');
  an = Number(input);
  if (Number.isNaN(an)) {
    continue;
  } else {
  total += an;
  }
}

alert(`Общая сумма чисел равна ${total}`);




