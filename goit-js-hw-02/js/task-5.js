'use strict';
const string = 'sdsd wfegeg sale qrwgrhth hrth spam wergwre';
const wordSpam = 'spam';
const wordSale = 'sale';
let result;

let words = string.split (' ');
console.log (words);

const checkForSpam = function(string) {
  
  let words = string.split (' ');

  for (const word of words) {
    if (word.toLowerCase().includes(wordSpam)  || word.toLowerCase().includes(wordSale)) {
      result = true;
      break;
    } else {
      result = false;
    }
  }

  return result;
}

console.log (checkForSpam(string));

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true









// 'use strict';
// const string = 'sdsd wfegeg sale qrwgrhth hrth spam wergwre';
// const wordSpam = 'spam';
// const wordSale = 'sale';
// let result;

// let words = string.split (' ');
// console.log (words);

// const checkForSpam = function(string) {
  
//   let words = string.split (' ');

//   for (const word of words) {
//     if (word.toLowerCase().includes(wordSpam)  || word.toLowerCase() === wordSale) {
//       result = true;
//       break;
//     } else {
//       result = false;
//     }
//   }

//   return result;
// }

// console.log (checkForSpam(string));

// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true










// || word === wordSale

// 'use strict';
// const string = 'Yoo dhdhfudh ususus nksjdk sjbdshdw';

// const findLongestWord = function(string) {

//   let words = string.split (' ');
//   let longestWord = words[0];

//   for (const word of words) {
//     if (longestWord.length < word.length) {
//       longestWord = word;
//     }
//   }

//   return longestWord
// }

// console.log (findLongestWord(string));
