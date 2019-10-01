'use strict';
let input;
let numbers = [];
let an;
let j = 0;
let total = 0;


while (input !== null) {
input = prompt('Введите число ', '');
numbers.push(Number(input));
}

for (const number of numbers) {

  if (number !== null) {
    total += number;
  } 

}

console.log (numbers);
console.log (`Общая сумма чисел равна ${total}`);

// почему в массив записываются нули?