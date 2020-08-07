function generateBoard(white, black) {
  const board = [];
  const size = 8;
  for (let i = 0; i < size; i++) {
    board.push([]);
    for (let j = 0; j < size; j++) {
      board[i].push(0);
    }
  }
  board[white[0]][white[1]] = 1;
  board[black[0]][black[1]] = 1;
  return board;
}

function queenThreat (board) {
  let pos1, pos2;
  for (let i = 0; i < board.length; i++) {
    if (board[i].indexOf(1) >= 0) {
      if (pos1 === undefined) {
        pos1 = [i, board[i].indexOf(1)];
      } else {
        pos2 = [i, board[i].indexOf(1)];
        break;
      }
      if (board[i].lastIndexOf(1) !== pos1[1]) {
        pos2 = [i, board[i].indexOf(1)];
        break;
      }
    }
  }
  // console.log(pos1,pos2);
  if (pos1[0] === pos2[0] || pos1[1] === pos2[1] || Math.abs(pos1[0] - pos2[0]) === Math.abs(pos1[1] - pos2[1])) {
    return true;
  } else {
    return false;
  }
}

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));