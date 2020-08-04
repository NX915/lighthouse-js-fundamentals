const instructorWithLongestName = function(instructors) {
  // Put your solution here
  let longName = {name: ''};
  for (let element of instructors) {
    if (element.name.length > longName.name.length) {
      longName = element;
    }
  }
  return longName;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));