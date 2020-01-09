const organizeInstructors = function(instructors) {
  //Pushing course names to an array
  let list = [];
  for (let i = 0; i < instructors.length; i++) {
    list.push(instructors[i].course);
  }

  //Filtering out duplicate course names and adding the unique course names to an object
  let finalList = {};
  for (let j = 0; j < list.length; j++) {
    if (list[j] in finalList !== true) {
      finalList[list[j]] = [];
    }
  }

  /* Filtering through instructors list and pushing names to corresponding course in finalList */
  for (let x = 0; x < instructors.length; x++) {
    if (instructors[x].course in finalList === true) {
      finalList[instructors[x].course].push(instructors[x].name);
    }
  }
  return finalList;
};

console.log(organizeInstructors([
  { name: "Samuel", course: "iOS" },
  { name: "Victoria", course: "Web" },
  { name: "Karim", course: "Web" },
  { name: "Donald", course: "Web" }
]));
console.log(organizeInstructors([
  { name: "Brendan", course: "Blockchain" },
  { name: "David", course: "Web" },
  { name: "Martha", course: "iOS" },
  { name: "Carlos", course: "Web" }
]));