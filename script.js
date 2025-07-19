const cells = document.querySelectorAll('[data-cell]');
const message = document.getElementById('winningMessage');
const messageText = document.getElementById('messageText');
const restartButton = document.getElementById('restartButton');
const turnIndicator = document.getElementById('turnIndicator');
const xScoreSpan = document.getElementById('xScore');
const oScoreSpan = document.getElementById('oScore');
const seriesResult = document.getElementById('seriesResult');

let isCircleTurn = false;
let xScore = 0;
let oScore = 0;
let isAIMode = false;
const roundLimit = 3;

const mode = localStorage.getItem('gameMode');
if (mode === 'ai') {
  isAIMode = true;
}

const WINNING_COMBINATIONS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

function startGame() {
  const winner = localStorage.getItem('seriesWinner');
  restartButton.innerText = winner ? 'New Series' : 'Restart';

  xScore = parseInt(localStorage.getItem('xScore')) || 0;
  oScore = parseInt(localStorage.getItem('oScore')) || 0;

  isCircleTurn = false;

  cells.forEach(cell => {
    cell.textContent = '';
    cell.classList.remove('x', 'o');
    cell.removeEventListener('click', handleClick);
    cell.addEventListener('click', handleClick, { once: true });
  });

  message.classList.remove('show');
  messageText.innerText = '';
  updateTurnIndicator();
  updateScore();
  checkSeriesWinner();
}

function handleClick(e) {
  const cell = e.target;
  if (cell.textContent !== '') return;

  if (isAIMode) {
    makeMove(cell, 'X');
  } else {
    const currentPlayer = isCircleTurn ? 'O' : 'X';
    makeMove(cell, currentPlayer);
  }
}

function makeMove(cell, player) {
  cell.textContent = player;
  cell.classList.add(player.toLowerCase());

  if (checkWin(player)) {
    endGame(false, player);
  } else if (isDraw()) {
    endGame(true);
  } else {
    isCircleTurn = !isCircleTurn;
    updateTurnIndicator();

    if (isAIMode && player === 'X') {
      setTimeout(() => {
        aiMove();
      }, 500);
    }
  }
}


async function aiMove() {
  const board = [...cells].map(cell => cell.textContent);

  try {
    const response = await fetch('http://127.0.0.1:8000/move', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ board: board })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const bestMove = data.move;

    if (bestMove !== null) {
      const cellToPlay = cells[bestMove];
      makeMove(cellToPlay, 'O'); 
    } else {
      console.warn("AI couldn't find a move.");
    }
  } catch (error) {
    console.error('Error fetching AI move:', error);
  }
}



function checkWin(player) {
  return WINNING_COMBINATIONS.some(combination =>
    combination.every(index => cells[index].textContent === player)
  );
}

function isDraw() {
  return [...cells].every(cell => cell.textContent !== '');
}

function endGame(draw, winner = null) {
  if (draw) {
    messageText.innerText = "It's a Draw!";
  } else {
    messageText.innerText = `${winner} Wins!`;
    if (winner === 'X') xScore++;
    else oScore++;

    updateScore();

    if (xScore === roundLimit || oScore === roundLimit) {
      localStorage.setItem('seriesWinner', winner);
      seriesResult.innerText = `${winner} won the best-of-${roundLimit} series!`;
      restartButton.innerText = 'New Series';
      disableBoard();
    }
  }

  message.classList.add('show');
  disableBoard();
}

function disableBoard() {
  cells.forEach(cell => {
    cell.removeEventListener('click', handleClick);
  });
}

function updateTurnIndicator() {
  turnIndicator.innerText = `Turn: ${isCircleTurn ? 'O' : 'X'}`;
}

function updateScore() {
  xScoreSpan.innerText = xScore;
  oScoreSpan.innerText = oScore;
  localStorage.setItem('xScore', xScore);
  localStorage.setItem('oScore', oScore);
}

function checkSeriesWinner() {
  const winner = localStorage.getItem('seriesWinner');
  if (winner) {
    seriesResult.innerText = `${winner} won the best-of-${roundLimit} series!`;
    restartButton.innerText = 'New Series';
    disableBoard();
  }
}

restartButton.addEventListener('click', () => {
  const isSeriesOver = localStorage.getItem('seriesWinner');
  if (isSeriesOver) {
    localStorage.removeItem('xScore');
    localStorage.removeItem('oScore');
    localStorage.removeItem('seriesWinner');
    seriesResult.innerText = '';
  }
  startGame();
});

startGame();
