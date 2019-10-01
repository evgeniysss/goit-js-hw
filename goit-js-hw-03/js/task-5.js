'use strict';
let country;
let price;
let china = 'Китай';
let chili = 'Чили';
let australia = 'Австралия';
let india = 'Индия';
let jamaica = 'Ямайка';
let countryString;

country = prompt('Введине название Вашей страны для доставки ', '');
country = country.toLowerCase();

switch (country) {
  case china.toLowerCase():
    price = 100;
    countryString = china;
    alert(`Доставка в ${countryString} будет стоить ${price} кредитов`);
    break;

  case chili.toLowerCase():
    price = 250;
    countryString = chili;
    alert(`Доставка в ${countryString} будет стоить ${price} кредитов`);
    break;

  case australia.toLowerCase():
    price = 170;
    countryString = australia;
    alert(`Доставка в ${countryString} будет стоить ${price} кредитов`);
    break;

  case india.toLowerCase():
    price = 80;
    countryString = india;
    alert(`Доставка в ${countryString} будет стоить ${price} кредитов`);
    break;

  case jamaica.toLowerCase():
    price = 120;
    countryString = jamaica;
    alert(`Доставка в ${countryString} будет стоить ${price} кредитов`);
    break;

  default:
    alert('В вашей стране доставка не доступна!');
}



