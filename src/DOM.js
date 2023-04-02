// import knightImg from './img/f_knight.png'

function renderCell() {
  const gameBoardContainer = document.querySelector(".gameboard");
  gameBoardContainer.replaceChildren("");

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const cellNum = `${i}${j}`;
      const cell = document.createElement("div");

      // set data attribute to co-responding number in tree-data
      cell.classList.add("cell");
      cell.setAttribute("cell-data", cellNum);

      // make cross pattern in gameboard
      if ((i + j) % 2 == 0) {
        cell.classList.add("white-cell");
      } else {
        cell.classList.add("black-cell");
      }

      gameBoardContainer.appendChild(cell);
    }
  }
}

function addImgToStart(element) {
  const ele = document.querySelector(".start-cell");
  if (ele !== null) ele.classList.remove("start-cell");

  element.classList.add("start-cell");
}

function changeColorToEndPoint(element) {
  const ele = document.querySelector(".end-cell");
  console.log(ele);
  if (ele !== null) ele.classList.remove("end-cell");

  element.classList.add("end-cell");
}

export { renderCell, addImgToStart, changeColorToEndPoint };
