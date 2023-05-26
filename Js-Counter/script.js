const number = document.getElementsByClassName('num')[0];
const decreaseButton = document.getElementById('decrease');
const resetButton = document.getElementById('reset');
const increaseButton = document.getElementById('increase');

decreaseButton.addEventListener('click', function () {
  number.innerText = Number(number.innerText) - 1;
});

increaseButton.addEventListener('click', function () {
  number.innerText = Number(number.innerText) + 1;
});

resetButton.addEventListener('click', function () {
  number.innerText = 0;
});
