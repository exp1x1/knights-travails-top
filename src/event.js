import { renderCell, addImgToStart, changeColorToEndPoint } from "./DOM";
import { knightGame, Knight } from "./knightGame";

export function event() {
  const gameBoard = knightGame(8);
  const knight = Knight();

  let currentSelectedCell = null;
  // display current event status || 1 = placeKnight event || 2 = end point of knight event
  let currentEvent;

  function updateCurrentSelectedCell(value) {
    currentSelectedCell = value;
    // console.log(currentSelectedCell);
  }

  function updateKnightData(value, element) {
    if (currentEvent === 1) {
      knight.start = value;
      addImgToStart(element);
    } else if (currentEvent === 2) {
      knight.end = value;
      changeColorToEndPoint(element);
    }
  }

  function applyEventListener() {
    const placeKnight = document.querySelector(".place");
    const endKnight = document.querySelector(".end");
    const travail = document.querySelector(".travail");
    const clear = document.querySelector(".clear");
    const gameBoardContainer = document.querySelector(".gameboard");

    gameBoardContainer.addEventListener("click", (e) => {
      const data = e.target.getAttribute("cell-data");
      const element = e.target;
      updateCurrentSelectedCell(data);
      updateKnightData(data, element);
    });

    placeKnight.addEventListener("click", () => {
      currentEvent = 1;
      console.log(currentEvent);
    });

    endKnight.addEventListener("click", () => {
      currentEvent = 2;
    });

    travail.addEventListener("click", () => {
      const path = gameBoard.knightMoves(knight.start, knight.end);

      console.log(path);
    });
  }

  function start() {
    renderCell();
    applyEventListener();
  }

  start();
}
