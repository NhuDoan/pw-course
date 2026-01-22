//Câu 1:
function multiply(a, b) {
  const multiply = a * b;
  return multiply;
}
console.log(multiply(0, 1)); //cách 1

const multi = multiply(-10, 1900); //cách 2
console.log(multi);

//Câu 2:
function findMin(a, b, c) {
  let min = a;
  if (b < min) {
    min = b;
  }
  if (c < min) {
    min = c;
  }
  return min;
}
console.log(findMin(12, 1, 3)); //bộ số 1
console.log(findMin(34, 2, -2)); //bộ số 2

//Câu 3:
const students = [
  { name: "Như", score: 10 },
  { name: "Lan", score: 10 },
  { name: "Trúc", score: 4.12413 },
  { name: "Mai", score: 8.2 },
  { name: "Tâm", score: 7.5 },
  { name: "My", score: 2.5 },
];
const threshold = 8;
function topStudents(students, threshold) {
  let top = [];
  for (let i = 0; i < students.length; i++)
    if (students[i].score >= threshold) {
      top.push(
        "Tên học sinh: " +
          `${students[i].name}` +
          " và điểm là " +
          `${students[i].score}`
      );
    }
  return top;
}
console.log(topStudents(students, threshold));

//Câu 4:
let principal = 0;
const rate = 5;
let interest = 0;
let year = 0;

function calculateInterest(principal, year) {
  let total = 0;
  if (principal > 0 && year > 0) {
    total = principal + (principal * rate * year) / 100;
  }
  return total;
}
const result = calculateInterest(17, 17);
console.log("Tiền lãi là: ", result);
