'use strict';
console.log('funguju');

let draw = 'circle';
const drawPlayerElm = document.querySelector('.draw-player');

document.querySelectorAll('.board-field__btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    if (draw === 'circle') {
      btn.classList.add('.board-field--circle');
      btn.innerHTML = `<img src="circle.svg"/>`;
      btn.setAttribute('disabled', true);
      drawPlayerElm.src = 'cross.svg';
      draw = 'cross';
    } else {
      btn.classList.add('.board-field--cross');
      btn.setAttribute('disabled', true);
      btn.innerHTML = `<img src="cross.svg"/>`;
      drawPlayerElm.src = 'circle.svg';
      draw = 'circle';
    }
  });
});
