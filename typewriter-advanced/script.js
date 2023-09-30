const secondText = document.querySelector('.second-text');

function textLoad() {
  setTimeout(() => {
    secondText.textContent = 'Freelancer';
  }, 0);
  setTimeout(() => {
    secondText.textContent = 'Youtuber';
  }, 4010);
  setTimeout(() => {
    secondText.textContent = 'Blogger';
  }, 8010);
  setTimeout(() => {
    secondText.textContent = 'copywriter';
  }, 12010);
}

textLoad();
setInterval(() => {
  textLoad();
}, 16010);
