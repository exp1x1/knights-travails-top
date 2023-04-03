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

function addImgToCell(element) {
  const ele = document.querySelector(".start-cell");
  if (ele !== null) ele.classList.remove("start-cell");

  element.classList.add("start-cell");
}

function changeColorToEndPoint(element) {
  const ele = document.querySelector(".end-cell");
  if (ele !== null) ele.classList.remove("end-cell");

  element.classList.add("end-cell");
}

function clearPlace() {
  const endEle = document.querySelector(".end-cell");
  const startEle = document.querySelector(".start-cell");
  const fistEle = document.querySelector(".start-text");

  if (endEle !== null) {
    endEle.classList.remove("end-cell");
  }
  if (startEle !== null) {
    startEle.classList.remove("start-cell");
  }
  if (fistEle !== null) {
    fistEle.classList.remove("start-text");
  }

  const allCells = document.querySelectorAll(".cell");
  // console.log(allCells, "hh");

  allCells.forEach((element) => {
    element.textContent = "";
  });
}


function renderPath(arr) {
  // clearPlace();
  for (let i = 0; i < arr.length; i++) {
    const domElement = document.querySelector(`[cell-data="${arr[i]}"]`);
    if (i === 0) {
      domElement.classList.add("start-text");
      domElement.textContent = "START";
    } else if (i === arr.length - 1) {
      addImgToCell(domElement);
    } else {
      domElement.textContent = i;
    }
    // console.log(domElement);
  }
}

export {
  renderCell,
  renderPath,
  addImgToCell,
  changeColorToEndPoint,
  clearPlace,
};
