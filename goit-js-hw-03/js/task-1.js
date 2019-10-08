// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'javascript'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of

'use strict';
const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
  };

  user.mood = 'happy';

  console.table (user);

  user.hobby = 'javascript';

  console.table (user);

  user.premium = false;

  console.table (user);

  const keys = Object.keys(user);

  console.table (keys);

for (const key of keys) {
  console.log('Ключ: ', key);
  console.log('Значение: ', user[key]);
}