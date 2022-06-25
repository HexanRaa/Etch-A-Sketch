const board = document.querySelector(".board");
board.style.display = "grid";
board.style.gridTemplateColumns = "repeat(16,1fr)";
board.style.gridTemplateRows = "repeat(16,1fr)";

for (let i = 0; i < 16 * 16; i++) {
  const box = document.createElement("div");
  box.style.backgroundColor = "white";
  box.style.border = "1px Solid black";
  board.appendChild(box);
}
