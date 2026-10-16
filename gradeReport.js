const students=[{name:"aline", score:91}, {name:"kami", score:47}, {name:"eric", score:76}, {name:"jean", score:58}, {name:"grace", score:83}];
let total = 0;
let passed = 0;
let bestScore= 0;
let bestStudent = "";

// calculate the total marks

for(const s of students){
    total += s.score;
    // count students who passed
    
    if(s.score >= 50){
        passed = passed + 1;
    }
    
    // find the highest score
    
    if(s.score > bestScore){
        bestScore = s.score;
        bestStudent = s.name;
    }
    
    // give grades now
    
    let grade;
      if (s.score >= 80) {
        grade = "A";
      } else if (s.score >= 70) {
        grade = "B";
      } else if (s.score >= 60) {
        grade = "C";
      } else if (s.score >= 50) {
        grade = "D";
      }
    
    // display students information
    
    
    console.log(s.name, s.score, grade);
    
    // calculate average
    
    
}
const average = total/ students.length;


// 7. Display the final results

console.log("-------------------");
console.log(`average: ${average.toFixed(2)} `);
console.log(`passed: ${passed} / ${students.length}`)
console.log(`Top student: ${bestStudent} ${bestScore}`)
