const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]
console.log(numbers); // Original array remains unchanged: [1, 2, 3, 4, 5]

// using index and array
const names = ['Alice', 'Bob', 'Charlie'];
const formattedNames =  names.map((name, index, arr) => `${index + 1}/${arr.length}: ${name}`)
console.log(formattedNames); // Output: ['1/3: Alice', '2/3: Bob', '3/3: Charlie']

const ns = [1,2,3,4];
const news = ns.map((n, i, array) => `${n} is the ${i}th number and the array is ${array}`);
console.log(news);
// Output: ['1 is the 0th number and the array is 1,2,3,4', '2 is the 1th number and the array is 1,2,3,4', '3 is the 2th number and the array is 1,2,3,4', '4 is the 3th number and the array is 1,2,3,4']


// mapping objects
const users = [
  { name: "Shohan", age: 22 },
  { name: "mehedi", age: 20 }
];

const namesOnly = users.map(user => user.name);
console.log(namesOnly); // ["Shohan", "Mehedi"]
