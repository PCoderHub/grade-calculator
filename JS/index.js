// Get marks for 5 subjects from the user

let mark1 = prompt("Enter mark for subject 1 out of 100");
let mark2 = prompt("Enter mark for subject 2 out of 100");
let mark3 = prompt("Enter mark for subject 3 out of 100");
let mark4 = prompt("Enter mark for subject 4 out of 100");
let mark5 = prompt("Enter mark for subject 5 out of 100");

// Calculate total and average

let total = parseInt(mark1) + parseInt(mark2) + parseInt(mark3) + parseInt(mark4) + parseInt(mark5);
let average = (total / 5);

// Display results

if(average >= 90) {
    alert(`Your Results :- Total: ${total}\nAverage: ${average}\nGrade: A+`);
} else if(average <= 89 && average >= 80) {
    alert(`Your Results :- Total: ${total}\nAverage: ${average}\nGrade: A`);
} else if(average <= 79 && average >= 70) {
    alert(`Your Results :- Total: ${total}\nAverage: ${average}\nGrade: B`);
} else if(average <= 69 && average >= 60) {
    alert(`Your Results :- Total: ${total}\nAverage: ${average}\nGrade: C`);
} else if(average <= 59 && average >= 50) {
    alert(`Your Results :- Total: ${total}\nAverage: ${average}\nGrade: D`);
} else {
    alert(`Your Results :- Total: ${total}\nAverage: ${average}\nGrade: F`);
}