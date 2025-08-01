// Step 1: Create an array of books
const books = ["HTML Basics", "CSS Mastery", "JavaScript Guide", "React Essentials", "Python for Beginners"];

// Step 2: Check if the array includes a JavaScript book
const hasJavaScriptBook = books.includes("JavaScript Guide");

// Step 3: Print a message based on the result
if (hasJavaScriptBook) {
  console.log("The array contains a JavaScript book.");
} else {
  console.log("The array does not contain a JavaScript book.");
}
