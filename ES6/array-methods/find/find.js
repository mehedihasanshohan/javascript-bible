const grillPieces = [10, 20, 30, 40, 50];

// Find the first piece with spice > 25
const tastyPiece = grillPieces.find(piece => piece > 25);

console.log(tastyPiece); // 30
console.log(grillPieces); // Original array remains unchanged: [10, 20, 30, 40, 50]

// Using index and array
const names = ['Alice', 'Bob', 'Charlie', 'David'];
const firstLongName = names.find((name, index, arr) => name.length > 3 && index < arr.length);
console.log(firstLongName); // 'Alice'

// Finding objects
const users = [
  { name: "Shohan", age: 22 },
  { name: "Rahat", age: 18 },
  { name: "Hasan", age: 25 }
];
const adultUser = users.find(user => user.age >= 21);
console.log(adultUser); // { name: "Shohan", age: 22 }
// If no match
const noUser = users.find(user => user.age > 30);
console.log(noUser); // undefined 