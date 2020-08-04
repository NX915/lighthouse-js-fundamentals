/* must have a capacity of at least 20, and be a school or community centre. */
function chooseStations (stations) {
  let vote = [];
  for (let arr of stations) {
    // console.log(arr);
    if (arr[1] >= 20 && (arr[2] === 'school' || arr[2] === 'community centre')){
      vote.push(arr[0]);
    }
  }
  return vote;
}

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

console.log(chooseStations(stations));