//Câu 1:
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2021,
};
console.log(car.year); //cách 1
console.log(car["year"]); //cách 2

//Câu 2:
const person = {
  name: "Như Đoàn",
  address: {
    street: "Tô Vĩnh Diện",
    city: "Thành phố Hồ Chí Minh",
    country: "Việt Nam",
  },
};
console.log(person["address"]["city"]); //cách 1
console.log(person.address.city); //cách 2

//Câu 3:
const student = {
  name: "Như-QA",
  grades: {
    math: 10,
    english: 9.75,
  },
};
console.log(student["grades"]["english"]);

//Câu 4:
const settings = {
  volume: 100,
  brightness: "high",
};
settings.volume = 50;
console.log(settings);

//Câu 5:
const bike = {
  brand: "Martin",
  year: 2020,
};
bike.color = "yellow";
//bike["color"] = "red"
console.log(bike);

//Câu 6:
const employee = {
  name: "ABC",
  age: "22",
};
delete employee.age;
console.log(employee);

//Câu 7:
const school = {
  classA: ["An", "Bình", "Châu"],
  classB: ["Đào", "Hương", "Giang"],
};
console.log(school);
