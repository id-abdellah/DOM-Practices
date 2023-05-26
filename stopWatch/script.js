const timer = document.getElementById('timer');
const playStopeButton = document.getElementById('playStope');
const resetButton = document.getElementById('reset');

let second = 0;
let minute = 0;
let hour = 0;

let leadingSecond;
let leadingMinute;
let leadingHour;

function stopWatch() {
  second++;

  if (second / 60 === 1) {
    minute++;
    second = 0;
  }

  if (minute / 60 === 1) {
    hour++;
    minute = 0;
  }

  if (second < 10) {
    leadingSecond = `0${second}`;
  } else {
    leadingSecond = second;
  }

  if (minute < 10) {
    leadingMinute = `0${minute}`;
  } else {
    leadingMinute = minute;
  }

  if (hour < 10) {
    leadingHour = `0${hour}`;
  } else {
    leadingHour = hour;
  }

  timer.innerHTML = `${leadingHour}:${leadingMinute}:${leadingSecond}`;
}

// window.setInterval(stopWatch, 1);

let timeIntervale = null;
let timerStatus = 'stopped';

playStopeButton.addEventListener('click', function () {
  if (timerStatus === 'stopped') {
    timeIntervale = window.setInterval(stopWatch, 1000);
    playStopeButton.innerHTML = `<span class="material-symbols-rounded">pause</span>`;
    timerStatus = 'started';
  } else {
    window.clearInterval(timeIntervale);
    playStopeButton.innerHTML = `<span class="material-symbols-rounded"> play_arrow </span>`;
    timerStatus = 'stopped';
  }
});

resetButton.addEventListener('click', function () {
  window.clearInterval(timeIntervale);
  second = 0;
  minute = 0;
  hour = 0;
  timer.innerText = `00:00:00`;
});
