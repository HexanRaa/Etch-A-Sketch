let color = 'red';

function boardSize() {
  const input = prompt('Enter the size of Board');
  if (input >= 2 && input <= 100) {
    createBoard(input);
  } else {
    alert('Enter a number between 2 and 100 for Board Size');
  }
}

createBoard(40);

function createBoard(size) {
  const board = document.querySelector('.board');
  const boxes = board.querySelectorAll('div');
  boxes.forEach((div) => div.remove());
  board.style.display = 'grid';
  board.style.gridTemplateColumns = `repeat(${size},1fr)`;
  board.style.gridTemplateRows = `repeat(${size},1fr)`;

  for (let i = 0; i < size * size; i++) {
    const box = document.createElement('div');
    box.addEventListener('mouseover', drawingColor);
    box.style.backgroundColor = 'white';
    board.appendChild(box);
  }
}

function changeColor(userChoice) {
  color = userChoice;
}

function drawingColor() {
  color === 'random'
    ? (color = `hsl(${Math.random() * 360},100%,50%)`)
    : (this.style.backgroundColor = color);
}

function reset() {
  const board = document.querySelector('.board');
  const boxes = board.querySelectorAll('div');
  boxes.forEach((div) => (div.style.backgroundColor = 'white'));
}
