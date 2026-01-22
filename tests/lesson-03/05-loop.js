//Câu 1: Tính tổng từ 1 đến 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum = sum + i;
}

console.log("Tổng từ 1 đến 100 là: ", sum);

//Câu 2: In bảng cửu chương từ 2 đến 9
for (let a = 2; a <= 9; a++) {
  console.log("Bảng cửu chương " + `${a}` + ":");
  for (let b = 1; b <= 10; b++) {
    let result = a * b;
    console.log(`${a}` + " * " + `${b}` + " = ", result);
  }
  console.log("");
}

//Câu 3: Tạo một mảng chứa các số lẻ từ 1 đến 99
const arr = [];
for (let i = 1; i <= 99; i++) {
  if (i % 2 != 0) {
    arr.push(i);
  }
}
console.log(arr);

//Câu 4:
const logEmail = [];
for (let i = 1; i <= 9; i++) {
  logEmail.push("user" + `${i}` + "@example.com");
}
console.log(logEmail);

//Câu 5:
let total = 0;
const data = [
  { month: 1, total: 100 },
  { month: 2, total: 100 },
  { month: 3, total: 100 },
  { month: 4, total: 100 },
  { month: 5, total: 100 },
  { month: 6, total: 100 },
  { month: 7, total: 100 },
  { month: 8, total: 100 },
  { month: 9, total: 100 },
  { month: 10, total: 100 },
  { month: 11, total: 100 },
  { month: 12, total: 100 },
];
for (let i = 0; i < data.length; i++) {
  total = total + data[i].total;
}
console.log("Tổng doanh thu là: ", total);
