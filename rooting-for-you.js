const judgeVegetable = function (vegetables, metric) {
  // Your code in here ...
  let biggest = 0, winner;
  for (element of vegetables) {
    if (biggest < element[metric]) {
      biggest = element[metric];
      winner = element.submitter;
    }
  }
  return winner;
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric));