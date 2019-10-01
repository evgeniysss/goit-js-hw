'use strict';
const string = 'abcdsdhgasjh dgjhsgdsdhjgf jsdhfgkshdfgkshdg fkjshdgfsjhdgfsjhdgfsdhfgshdfgsjdge';
let aaa;


const formatString = function(string) {
if ( string.length > 40 ) {
    aaa = string.substring(0, 40);
    }

console.log (aaa+'...');
}

formatString (string);





// const formatString = function(string) {
//     if ( string.length > 40 ) {
//     aaa = string.substring(0, 40);
//     }
// }
// console.log (aaa);

// formatString (string);



// if ( string.length > 40 ) {
//     aaa = string.substring(0, 40);
// }

// console.log (aaa);



// const formatString = function(string) {
//     if ( string.length > 40 ) {
//         for (let char of string) {
//         console.log (string.charAt(char));
//     }
// }

// formatString (string);

