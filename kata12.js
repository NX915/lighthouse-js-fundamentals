const organizeInstructors = function(instructors) {
  // Put your solution here
  const output = {};
  for (let i = 0; i < instructors.length; i++) {
    if (Object.keys(output).indexOf(instructors[i].course) === -1) {
      output[instructors[i].course] = [instructors[i].name];
    } else {
      output[instructors[i].course].push(instructors[i].name);
    }
  }
return output;
}

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));