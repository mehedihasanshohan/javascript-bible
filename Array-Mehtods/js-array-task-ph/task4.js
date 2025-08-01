// Step 1: Create variables with different types
const books = ["JavaScript", "HTML", "CSS"];   // Array
const age = 25;                                // Number
const name = "Mehedi";                         // String
const isStudent = true;                        // Boolean
const user = { name: "Shohan", age: 26};      // Object
const emptyList = [];                          // Empty array

// Step 2: Check if each variable is an array and print a message
console.log(Array.isArray(books) ? "books is an array." : "books is not an array.");
console.log(Array.isArray(age) ? "age is an array." : "age is not an array.");
console.log(Array.isArray(name) ? "name is an array." : "name is not an array.");
console.log(Array.isArray(isStudent) ? "isStudent is an array." : "isStudent is not an array.");
console.log(Array.isArray(user) ? "user is an array." : "user is not an array.");
console.log(Array.isArray(emptyList) ? "emptyList is an array." : "emptyList is not an array.");

// outputs:
// books is an array.
// age is not an array.
// name is not an array.
// isStudent is not an array.
// user is not an array.
// emptyList is an array.