const showButton = document.getElementById('btn');
const modelContainer = document.getElementsByClassName('model-container')[0];
const model = modelContainer.firstElementChild;
const closeButton = document.getElementById('closeBtn');

showButton.addEventListener('click', (_) => {
  modelContainer.style.display = 'block';
  model.style.top = '100px';
});

closeButton.addEventListener('click', (_) => {
  modelContainer.style.display = 'none';
});
