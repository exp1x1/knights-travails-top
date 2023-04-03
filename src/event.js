import {
  renderCell,
  renderPath,
  addImgToCell,
  changeColorToEndPoint,
  clearPlace,
} from "./DOM";
import { startPointError, endPointError } from "./error";
import { knightGame, Knight } from "./knightGame";

export function event() {
  const gameBoard = knightGame(8);
  let knight = Knight();

  let currentSelectedCell = null;
  // display current event status || 1 = placeKnight event || 2 = end point of knight event
  let currentEvent = 0;

  function updateCurrentSelectedCell(value) {
    currentSelectedCell = value;
  }

  function updateKnightData(value, element) {
    if (currentEvent === 1) {
      knight.start = value;
      addImgToCell(element);
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
    });

    endKnight.addEventListener("click", () => {
      currentEvent = 2;
    });

    travail.addEventListener("click", () => {
      if (knight.start === null || knight.end === null) {
        if (knight.start === null) {
          startPointError();
        } else {
          endPointError();
        }
        return;
      }

      const path = gameBoard.knightMoves(knight.start, knight.end);
      renderPath(path);
      // console.log(path);
    });

    clear.addEventListener("click", () => {
      clearPlace();
      currentSelectedCell = null;
      currentEvent = 0;
      knight = Knight();
    });
  }

  function start() {
    renderCell();
    applyEventListener();
  }

  start();
}
