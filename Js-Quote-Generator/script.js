const quote = document.querySelector('.quote');
const persone = document.querySelector('.persone');

const button = document.querySelector('.btn');

let moreQuotes = [
  {
    quote: 'If you’re going through hell, keep going.',
    persone: 'Winston Churchill',
  },
  {
    quote: 'Every man dies. Not every man lives.',
    persone: 'William Wallace',
  },
  {
    quote: 'Life shrinks or expands in proportion to one’s courage.',
    persone: 'Anais Nin',
  },
  {
    quote: 'We need much less than we think we need.',
    persone: 'Maya Angelou',
  },
  {
    quote: 'If things go wrong, don’t go with them.',
    persone: 'Roger Babson',
  },
  {
    quote: 'Don’t let yesterday take up too much of today.',
    persone: 'Will Rogers',
  },
];

button.addEventListener('click', function () {
  let random = Math.floor(Math.random() * moreQuotes.length);
  quote.innerText = moreQuotes[random].quote;
  persone.innerText = moreQuotes[random].persone;
});
