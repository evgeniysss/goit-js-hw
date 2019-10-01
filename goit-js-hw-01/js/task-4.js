'use strict';
const pricePerDroid = 3000;
let credits = 23580;
let quantityDroids;
let totalPrice;
let message;

quantityDroids = prompt('Тебе сколько дроидов? ', '');

if (quantityDroids === null) {
  console.log('Отменено пользователем!');
} else {
  totalPrice = quantityDroids * pricePerDroid;
} 

if (totalPrice > credits) {
  console.log('Недостаточно средств на счету!');
} else {
  credits = credits - totalPrice;
  console.log(`Вы купили ${quantityDroids} дроидов, на счету осталось ${credits} кредитов.`);
}





