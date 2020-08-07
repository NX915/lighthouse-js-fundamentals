const blocksAway = function(directions) {
  // Put your solution here
  const output = {};
  const pos = [0, 0];//dir 0 = north, 1 = east, 2 = south, 3 = west
  let dir, length;

  for (let i = 0; i < directions.length; i += 2) {
    if (i === 0) {
      switch (directions[i]) {
      case 'left':
        dir = 0;
        break;
      case 'right':
        dir = 1;
        break;
      }
    } else {
      if  (directions[i] === 'left') {
        dir--;
        if (dir < 0) {
          dir = 3;
        }
      } else {
        dir++;
        if (dir > 3) {
          dir = 0;
        }
      }
    }
    length = directions[i + 1];
    switch (dir) {
    case 0:
      pos[1] += length;
      break;
    case 1:
      pos[0] += length;
      break;
    case 2:
      pos[1] -= length;
      break;
    case 3:
      pos[0] -= length;
      break;
    }
  }
  output.east = pos[0];
  output.north = pos[1];
  return output;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));