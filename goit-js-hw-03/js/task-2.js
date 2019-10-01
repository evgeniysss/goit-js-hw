'use strict';
let i = 0;

const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
  };

  const keys = Object.keys(user);

  console.table (keys);

for (const key of keys) {
  console.log('Ключ: ', key);
  i += 1;
  
}

console.log ('Количество свойств: ', i);