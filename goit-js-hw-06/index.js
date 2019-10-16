import users from './js/users.js';
console.log('users:', users);

// "use strict";

// Задание 1
// Получить массив имен всех пользователей (поле name).


// Первый вариант решения
// const getUserNames = users => {
//     let usersArr = [];
//     users.forEach(el => usersArr.push (el.name));
//     return usersArr;
//   };

// Второй вариант решения
// const getUserNames = users => {
//     const usersArr = users.map (el => el.name);
//     return usersArr;
//   };

//   console.log(getUserNames(users));
  // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]


// Задание 2
// Получить массив объектов пользователей по цвету глаз (поле eyeColor).


// const getUsersWithEyeColor = (users, color) => {
//     return users 
//     .filter ((el) => el.eyeColor === color);
//   };
  
//   console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]


// Задание 3
// Получить массив имен пользователей по полу (поле gender).


// const getUsersWithGender = (users, gender) => {
//   return users 
//   .filter ((el) => el.gender === gender);
//   };
  
// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
  

// Задание 4
// Получить массив только неактивных пользователей (поле isActive).


// const getInactiveUsers = users => {
//   const activeUsers = users
//   .filter ((el) => !el.isActive)
//   .map (el => el.name);
//   return activeUsers;
// };

// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]


// Задание 5
// Получить пользоваля (не массив) по email (поле email, он уникальный).

// const getUserWithEmail = (users, email) => {
//   const activeUsers = users
//   .filter ((el) => el.email === email)
//   .map (el => el.name);
//   return activeUsers;
// };

// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}


// Задание 6
// Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).

// const getUsersWithAge = (users, min, max) => {
//   const ageUser = users
//   .filter ((el) => el.age >= min && el.age <= max)
//   .map (el => el.name);
//   return ageUser;
// };

// console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

// console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]


// Задание 7
// Получить общую сумму баланса (поле balance) всех пользователей.


// const calculateTotalBalance = users => {
//   let sumBalance = 0;
//   const sumArr = users
//   .map (el => sumBalance += el.balance);
//   return sumBalance;
// };

// console.log(calculateTotalBalance(users)); // 20916


// Задание 8
// Массив имен всех пользователей у которых есть друг с указанным именем.


const getUsersWithFriend = (users, friendName) => {
  return users
  .filter (user => user.friends.includes (friendName))
  .map(user => user.name);
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]