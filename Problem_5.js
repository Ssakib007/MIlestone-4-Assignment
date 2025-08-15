/// Create a function named resultReport(), which will take input an array of numbers, which will be the marks of a student. it will return a object which will have 3 properties -- final score : average marks | pass : how many subjects in the student passed | fail: how many subjects in the student failed.
/// pass mark for every subject is 40
/// final score should be a rounded number. no decimal after the number.
/// return the output , do not console log the output
/// if the input is not array, return invalid.
//// sample input and outputs
// SAMPLE INPUT
// SAMPLE OUTPUT ( object / string )
// []
// { finalScore: 0 , pass: 0, fail: 0 }
// [98, 87, 67, 91, 92, 33, 87]
// { finalScore: 79, pass: 6, fail: 1 }
// [99, 87, 67, 12 ,87]
// { finalScore: 70, pass: 4, fail: 1 }
// [99]
// { finalScore: 99, pass: 1, fail: 0 }
// 100
// Invalid

function resultReport(marks) {
  if (!Array.isArray(marks)) {
    return "Invalid";
  }
  if (marks.length === 0) {
    return { finalScore: 0, pass: 0, fail: 0 };
  }
  let total = 0;
  let pass = 0;
  let fail = 0;
  for (const mark of marks) {
    total = total + mark;
    if (mark >= 40) {
      pass++;
    } else {
      fail++;
    }
  }
  const avg = total / marks.length;
  return {
    finalScore: Math.round(avg),
    pass,
    fail,
  };
}


