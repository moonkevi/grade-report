const students = [
  { name: "Aline", score: 91 },
  { name: "Eric", score: 47 },
  { name: "Grace", score: 76 },
  { name: "Jean", score: 58 },
  { name: "Diane", score: 83 }
];

let total = 0;
let passed = 0;
let highestScore = 0;
let bestStudent = "";

for (const student of students) {
  // 1. Calculate the total
  total = total + student.score;

  // 2. Count students who passed
  if (student.score >= 50) {
    passed = passed + 1;
  }

  // 3. Find the highest score
  if (student.score > highestScore) {
    highestScore = student.score;
    bestStudent = student.name;
  }

  // 4. Give each student a grade
  let grade = "F";

  if (student.score >= 80) {
    grade = "A";
  } else if (student.score >= 70) {
    grade = "B";
  } else if (student.score >= 60) {
    grade = "C";
  } else if (student.score >= 50) {
    grade = "D";
  }

  // 5. Display the student's result
  console.log(student.name, student.score, grade);
}

// 6. Calculate the average
const average = total / students.length;

// 7. Display the final results
console.log("-------------------");
console.log("Average:", average.toFixed(1));
console.log("Passed:", passed, "/", students.length);
console.log("Top student:", bestStudent, highestScore);