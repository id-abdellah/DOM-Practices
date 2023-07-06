const textInput = document.querySelector(`input[type="text"]`);
const range = document.querySelector(`input[type="range"]`);
const button = document.querySelector('button');

// Password generator
function passwordGenerator(range) {
  let letters = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_-+={[}]|\\:;"'<,>.?/`;
  let password = [];
  for (let i = 0; i < range; i++) {
    password.push(letters[Math.floor(Math.random() * letters.length)]);
  }
  return password.join('');
}

// range input
range.dataset.value = range.value;
range.addEventListener('input', () => {
  range.dataset.value = range.value;
});

//
button.addEventListener('click', () => {
  textInput.value = passwordGenerator(range.value);
});
