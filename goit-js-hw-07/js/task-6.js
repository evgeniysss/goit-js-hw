// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

'use strict';


const input = document.getElementById('validation-input');
input.addEventListener ('input', () => {
    if (input.value.length === 6) {
        input.classList.remove('invalid')
        input.classList.add('valid')
    } else {
        input.classList.add('invalid')
    }
})







// let valInput  = document.getElementById('validation-input');
// valInput.addEventListener('input', function() {
//  const input = valInput.value;
// if (valInput.length === 6){
//  valInput.classList.remove('invalid');
//  valInput.classList.add('valid');
// }
// else{
//  valInput.classList.add('invalid');
// }
// });