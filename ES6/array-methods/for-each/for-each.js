// basic for each
const fruits = ["apple", "banana", "mango"];

fruits.forEach(fruit => {
  console.log(fruit);
});
console.log(fruits); // original array remains unchanged: ['apple', 'banana', 'mango']
// output:
// apple
// banana
// mango



// using index and array
const numbers = [10, 20, 30];

numbers.forEach((num, i) => {
  console.log(`Index: ${i}, Value: ${num}`);
});

// output:
// Index: 0, Value: 10
// Index: 1, Value: 20
// Index: 2, Value: 30



// objects with for each
const students = [
  { name: "Mehedi", age: 23 },
  { name: "Hasan", age: 20 },
  { name: "Shohan", age: 25 }
];

students.forEach(student => {
  console.log(`${student.name} is ${student.age} years old`);
});

// output:
// Mehedi is 23 years old
// Hasan is 20 years old
// Shohan is 25 years old
