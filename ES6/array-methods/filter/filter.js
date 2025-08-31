// example-1
const numbers = [5, 12, 8, 20, 3];

const filtered = numbers.filter(num => num > 10);
console.log(filtered); // [12, 20]


// example-2 index
const fruits = ["apple", "banana", "mango", "pear"];

const selected = fruits.filter((fruit, i) => i % 2 === 0);
console.log(selected); // ["apple", "mango"]


// example-3 filtering-objects
const users = [
  { name: "Shohan", age: 22 },
  { name: "Rahat", age: 18 },
  { name: "Hasan", age: 25 }
];

const adults = users.filter(user => user.age >= 21);
console.log(adults);
// Output: [ { name: "Shohan", age: 22 }, { name: "Hasan", age: 25 } ]


// example-4 complex-condition
const chickenPieces = [ 'spicy', 'plain', 'masala', 'extra-spicy', 'bland' ];

const grillReady = chickenPieces.filter(piece => piece.includes('spicy') || piece === 'masala');
console.log(grillReady); // [ 'spicy', 'masala', 'extra-spicy' ]
