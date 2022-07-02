let color = 'black';

function boardSize() {
  const input = prompt('Enter the size of Board');
  if (input >= 2 && input <= 100) {
    createBoard(input);
  } else {
    alert('Enter a number between 2 and 100 for Board Size');
  }
}

function createBoard(size) {
  const board = document.querySelector('.board');
  board.style.display = 'grid';
  board.style.gridTemplateColumns = `repeat(${size},1fr)`;
  board.style.gridTemplateRows = `repeat(${size},1fr)`;

  for (let i = 0; i < size * size; i++) {
    const box = document.createElement('div');
    box.addEventListener('mouseover', () => {
      box.style.backgroundColor = color;
    });
    board.appendChild(box);
  }
}
