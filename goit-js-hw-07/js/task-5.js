// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
// подставляет его текущее значение в span#name-output. 
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

'use strict';

const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

function getName (e)  {
    output.textContent = input.value;
    if (input.value === "") {
        output.textContent = "Незнакомец"
    }
}

input.addEventListener ('input', getName)