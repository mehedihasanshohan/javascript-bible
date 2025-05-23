// Function Declaration (Hoisted Completely)
greet(); // ✅ Works fine

function greet() {
  console.log("Hello from function declaration!");
}

// Function Expression (Hoisted partially - variable hoisted, not value)
try {
  sayHi(); // ❌ TypeError: sayHi is not a function
} catch (err) {
  console.error(err);
}

var sayHi = function () {
  console.log("Hello from function expression!");
};

// Arrow Function Expression (Same as regular function expression)
try {
  arrowHello(); // ❌ TypeError: arrowHello is not a function
} catch (err) {
  console.error(err);
}

var arrowHello = () => {
  console.log("Hello from arrow function!");
};
