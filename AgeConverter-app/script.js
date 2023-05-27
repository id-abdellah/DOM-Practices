const inputField = document.querySelector('.inputField input');
const months = document.querySelector('.in-month input');
const weeks = document.querySelector('.in-weeks input');
const days = document.querySelector('.in-days input');
const hours = document.querySelector('.in-hours input');
const minutes = document.querySelector('.in-minutes input');
const seconds = document.querySelector('.in-seconds input');
const allOutputFields = document.querySelectorAll('.outputField div input');
allOutputFields.forEach((e) => {
  e.setAttribute('readonly', '');
  e.value = '0';
});
function toMonths() {
  months.value = inputField.value * 12;
}
function toWeeks() {
  weeks.value = inputField.value * 52;
}
function toDays() {
  days.value = inputField.value * 365;
}
function toHours() {
  hours.value = inputField.value * 8760;
}
function toMinutes() {
  minutes.value = inputField.value * 525600;
}
function toSeconds() {
  seconds.value = inputField.value * 31540000;
}
inputField.addEventListener('change', toMonths);
inputField.addEventListener('change', toWeeks);
inputField.addEventListener('change', toDays);
inputField.addEventListener('change', toHours);
inputField.addEventListener('change', toMinutes);
inputField.addEventListener('change', toSeconds);
