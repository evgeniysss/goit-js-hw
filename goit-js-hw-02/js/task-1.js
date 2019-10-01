'use strict';
const namesMassive = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];
const numbersMassive = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];


let numbers = namesMassive;
let k = 1;
const logItems = function(numbers) {
    for (let i = 0; i < numbers.length; i += 1) {
        console.log(k, numbers[i]);
        k = k + 1;
    }
  };
  
const result = logItems(numbers);


k = 1;
let i = 1;
numbers = numbersMassive;
logItems(numbers);
  










//   // a, b, c это параметры
// const add = function(a, b, c) {
//     return a + b + c;
//   };
  
//   // 1, 2, 3 это аргументы
//   const result = add(1, 2, 3);
  
//   console.log(result); // 6
//   console.log(add(5, 10, 15)); // 30



// let a = 3;
// let b = 5;
// let c = 8;
// let add = function(a, b, c) {
//     return a + b + c;
//   };

// console.log(add);


// logItems() {
//     for (let i = 0; i < namesOfUser.length; i += 1) {
//         console.log(k, namesOfUser[i]);
//         k = k + 1;
//     }


// console.log(logItems);
  

// for (const client of namesOfUser) {
//     console.log(i);
//     i = i + 1;
//     console.log(client);
// }


// console.log(namesOfUser);
// console.log(namesOfUser[3]);
// console.log(numbers);


