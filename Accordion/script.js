const title = [...document.getElementsByClassName('title')];
const answer = document.getElementsByClassName('answer');

title.forEach(function (a) {
  a.addEventListener('click', function () {
    a.nextElementSibling.classList.toggle('answer-opened');
  });
  // a.addEventListener('click', two);
});
