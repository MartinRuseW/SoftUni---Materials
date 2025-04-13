function exam(input) {
  let students = Number(input.shift());
  let topStudents = 0;
  let excellentGrade = 0;
  let goodGrade = 0;
  let failGrade = 0;
  let sum = 0;

  for (let index = 0; index < students; index++) {
    let grade = Number(input[index]);
    sum += grade;
    if (grade >= 5) {
      topStudents++;
    } else if (grade >= 4) {
      excellentGrade++;
    } else if (grade >= 3) {
      goodGrade++;
    } else {
      failGrade++;
    }
  }

  console.log(`Top students: ${(topStudents / students * 100).toFixed(2)}%`);
  console.log(`Between 4.00 and 4.99: ${(excellentGrade / students * 100).toFixed(2)}%`);
  console.log(`Between 3.00 and 3.99: ${(goodGrade / students * 100).toFixed(2)}%`);
  console.log(`Fail: ${(failGrade / students * 100).toFixed(2)}%`);
  console.log(`Average: ${(sum / students).toFixed(2)}`);
}
exam(["10",
"3.00",
"2.99",
"5.68",
"3.01",
"4",
"4",
"6.00",
"4.50",
"2.44",
"5"])
