'use strict';
const message = 'Wo dhfjdh jhdeu jde dwiodoe';
const pricePerWord = 50;

const calculateEngravingPrice = function(message, pricePerWord) {

  let messageMassive = message.split (' ');
  const totalPrice = messageMassive.length * pricePerWord;

  return totalPrice;
}

console.log (calculateEngravingPrice(message, pricePerWord));

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
); // 80

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
); // 160

console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 40)); // 200

console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 20)); // 100





// const messageMassive = message.split (' ');

// const totalPrice = messageMassive.length * pricePerWord;

// console.log (messageMassive);
// console.log (totalPrice);