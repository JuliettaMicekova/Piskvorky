'use strict';
console.log('funguju');

let draw = 'circle';
const drawPlayerElm = document.querySelector('.draw-player');

document.querySelectorAll('.board-field__btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    if (draw === 'circle') {
      btn.classList.add('board__field--circle');
      btn.setAttribute('disabled', true);
      drawPlayerElm.src = 'cross.svg';
      draw = 'cross';
    } else {
      btn.classList.add('board__field--cross');
      btn.setAttribute('disabled', true);
      drawPlayerElm.src = 'circle.svg';
      draw = 'circle';
    }

    const pozice = getPosition(btn);
    const pole = getField(pozice.row, pozice.column);

    if (isWinningMove(pole) === true) {
      setTimeout(function () {
        if (getSymbol(pole) === 'circle') {
          let result = confirm('Vyhrál kroužek:Načíst novou hru?');
          if (result === true) {
            location.reload();
          }
        } else {
          let result = confirm('Vyhrál křížek:Načíst novou hru?');
          if (result === true) {
            location.reload();
          }
        }
      }, 400);
    }
  });
});

const symbolsToWin = 5;
const isWinningMove = (field) => {
  const origin = getPosition(field);
  const symbol = getSymbol(field);

  let i;

  let inRow = 1;

  // ---- do ľava -------
  i = origin.column;
  while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
    inRow++;
    i--;
  }
  // ------- do prava --------
  i = origin.column;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(origin.row, i + 1))
  ) {
    inRow++;
    i++;
  }

  if (inRow >= symbolsToWin) {
    return true;
  }

  let inColumn = 1;
  // ----- hore -----
  i = origin.row;
  while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
    inColumn++;
    i--;
  }
  // ------- dolu--------
  i = origin.row;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(i + 1, origin.column))
  ) {
    inColumn++;
    i++;
  }

  if (inColumn >= symbolsToWin) {
    return true;
  }

  return false;
};

// ----------- funkcia ktora zistuje aky je symbol na policku----------------
const getSymbol = (btn) => {
  if (btn.classList.contains('board__field--cross')) {
    return 'cross';
  } else if (btn.classList.contains('board__field--circle')) {
    return 'circle';
  }
};
// --------------funkcia ktora najde policko na zaklade stlpcov a riadkov --------------
const boardSize = 10;
const fields = document.querySelectorAll('.board-field__btn');
const getField = (row, column) => {
  return fields[row * boardSize + column];
};

// ----funkcia ktora pre dane policko vrati objekt s riadkom a stlpcom, kde bol umiestneny symbol---
const getPosition = (field) => {
  let fieldIndex = 0;
  while (fieldIndex < fields.length && field !== fields[fieldIndex]) {
    fieldIndex++;
  }
  return {
    row: Math.floor(fieldIndex / boardSize),
    column: fieldIndex % boardSize,
  };
};
