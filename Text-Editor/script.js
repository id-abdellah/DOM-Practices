const select = document.querySelector('select');

const boldBtn = document.getElementById('bold');

const decrementBtn = document.getElementById('decrement');

const spanOfSize = document.querySelector('.p-m span');

const incrementBtn = document.getElementById('increment');

const invertColors = document.getElementById('invertColors');

const mainText = document.querySelector('.main-text');
let sizeValue = 16;

const editAbleBtn = document.getElementById('makeItEditable');

const italicBtn = document.getElementById('italic');

// Bold Text
boldBtn.addEventListener('click', () => {
  mainText.classList.toggle('main-text-bolded');
  boldBtn.classList.toggle('bold-button-clicked');
});

// Increment font size
incrementBtn.addEventListener('click', () => {
  mainText.style.fontSize = `${++sizeValue}px`;
  spanOfSize.innerText = Number(spanOfSize.innerText) + 1;

  if (sizeValue == 30) {
    incrementBtn.setAttribute('disabled', true);
  }
  decrementBtn.removeAttribute('disabled');
});

// decrement font size
decrementBtn.addEventListener('click', () => {
  mainText.style.fontSize = `${--sizeValue}px`;
  spanOfSize.innerText = Number(spanOfSize.innerText) - 1;

  incrementBtn.removeAttribute('disabled');
  if (sizeValue == 10) {
    decrementBtn.setAttribute('disabled', true);
  }
});

// invertColors
invertColors.addEventListener('click', () => {
  mainText.classList.toggle('inverted');
  invertColors.classList.toggle('inverted-colors-clicked');
});

// Choosing Font

select.addEventListener('change', () => {
  if (select.value == 'poppins') {
    mainText.style.cssText = `font-family: 'Poppins', sans-serif;`;
  } else if (select.value == 'playfair') {
    mainText.style.cssText = `font-family: 'Playfair', serif;`;
  } else if (select.value == 'raleway') {
    mainText.style.cssText = `font-family: 'Raleway', sans-serif;`;
  } else if (select.value == 'openSans') {
    mainText.style.cssText = `font-family: 'Open Sans', sans-serif;`;
  } else if (select.value == 'robotoMono') {
    mainText.style.cssText = `font-family: 'Roboto Mono', monospace;`;
  }
  mainText.style.fontSize = `${sizeValue}px`;
});

// some styles
spanOfSize.style.userSelect = 'none';

// editable btn

editAbleBtn.addEventListener('click', () => {
  editAbleBtn.classList.toggle('general-button-clicked');
  if (!mainText.hasAttribute('contenteditable')) {
    mainText.setAttribute('contenteditable', 'true');
  } else {
    mainText.removeAttribute('contenteditable');
  }
});

// italic button
italicBtn.addEventListener('click', () => {
  italicBtn.classList.toggle('general-button-clicked');
  if (!mainText.style.fontStyle) {
    mainText.style.setProperty('font-style', 'italic');
  } else {
    mainText.style.removeProperty('font-style');
  }
});
