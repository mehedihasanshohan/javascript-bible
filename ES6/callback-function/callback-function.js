function greet(name, callback) {
  console.log("Hello " + name);
  callback(); // calling the callback function
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Shohan", sayGoodbye);

// Hello Shohan
// Goodbye!
