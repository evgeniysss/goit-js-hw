// Есть массив цветов в hex-формате и кнопки Start и Stop.
// Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body на случайное значение из массива используя инлайн-стиль. При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.
// warning Учти, на кнопку Start можно нажать бесконечное количество раз. Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.
// Для генерации случайного числа (индекс элемента массива цветов), используй функцию

const body = document.querySelector('body');
const buttonStart = document.querySelector('button[data-action=start]');
const buttonStop = document.querySelector('button[data-action=stop]');
let changeColorInterval;

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

const randomBackgroundColor = () => {
    body.style.backgroundColor = `${colors[randomInteger(0, 5)]}`;
}

const changeColors = () => {
  buttonStart.disabled = true;
  changeColorInterval = setInterval(randomBackgroundColor, 1000);
}

const stop = () => {
  buttonStart.disabled = false;
  clearInterval(changeColorInterval);
}

buttonStart.addEventListener('click', changeColors);
buttonStop.addEventListener('click', stop);