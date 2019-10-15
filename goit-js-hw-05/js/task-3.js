// Напиши класс Storage, который будет создавать объекты для управления складом товаров. 
// При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.

// Добавь методы класса:

// getItems() - возвращает массив текущих товаров
// addItem(item) - получает новый товар и добавляет его к текущим
// removeItem(item) - получет товар и, если он есть, удаляет его из текущих

'use strict';

class Storage {
  constructor (items) {
    this.items = items;
  }

  getItems() {
    console.log('getItems :');
    return this.items
    // console.log('Storage :', this.name); // return
  };

  addItem(word) {
    this.items.push (word);
    console.log('addItem :', this.items);
  };

  removeItem (word) {
    const indexOfElement = this.items.indexOf(word);
    console.log('removeItem :');
    console.log('object :', word);
    this.items.splice (indexOfElement, 1);
    return this.items;
  }
}

const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]