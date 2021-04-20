'use strict';
console.log('funguju');

let draw = 'circle';
const playersDrawElm = document.querySelector('.players--draw');
const boardFieldElm = document.querySelector('.board_field');

boardFieldElm.addEventListener('click', (event) => {
  const clickedButton = event.target;

  if (draw === 'circle') {
    clickedButton.classList.add = '.board__field--circle';
    clickedButton.disabled = true;
    playersDrawElm.src = 'cross.svg';
    draw = 'cross';
    console.log(playersDrawElm);
  } else draw === 'cross';
  {
    clickedButton.classList.add = '.board__field--circle';
    clickedButton.disabled = true;
    playersDrawElm.src = 'circle.svg';
    draw = 'circle';
    console.log(playersDrawElm);
  }
});
