function finalPosition (moves) {
  let coord = [0, 0];
  for (let arr of moves) {
    switch (arr) {
    case 'north':
      coord[1]++;
      break;
    case 'south':
      coord[1]--;
      break;
    case 'east':
      coord[0]++;
      break;
    case 'west':
      coord[0]--;
      break;
    }
  }
  return coord;
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

console.log(finalPosition(moves));