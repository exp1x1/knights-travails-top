export function knightGame(size) {
  const moves = [
    [2, 1],
    [1, 2],
    [1, -2],
    [2, -1],
    [-2, 1],
    [-1, 2],
    [-2, -1],
    [-1, -2],
  ];

  function gameBoard(size) {
    const board = {};

    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        const cellNum = `${i}${j}`;
        board[cellNum] = [];

        for (let [mr, mc] of moves) {
          const row = i + mr;
          const col = j + mc;

          if (row >= 0 && col >= 0 && row < size && col < size) {
            board[`${i}${j}`].push(`${row}${col}`);
          }
        }
      }
    }

    return board;
  }

  const newGameBoard = gameBoard(size);

  function getBoard() {
    return newGameBoard;
  }
  function knightMoves(start, end) {
    const queue = [{ node: start, path: [] }];
    const visited = [];

    while (queue.length) {
      const { node, path } = queue.shift();

      if (node == end) {
        return path.concat(node);
      }

      if (!visited.includes(node)) {
        visited.push(node);
        for (let e of newGameBoard[node]) {
          queue.push({ node: e, path: path.concat(node) });
        }
      }
    }
    return null;
  }

  return { knightMoves };
}

export function Knight() {
  let start = null;
  let end = null;
  return { start, end };
}
