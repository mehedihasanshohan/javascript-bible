// Null example
let emptyValue = null;
console.log(emptyValue); // null
console.log(typeof emptyValue); // object (JavaScript quirk)

// Undefined example
let notAssigned;
console.log(notAssigned); // undefined
console.log(typeof notAssigned); // undefined


// 1. Variable declared but not assigned
let a;
console.log(a); // undefined

// 2. Function without return
function doSomething() {}
console.log(doSomething()); // undefined

// 3. Accessing property that doesn't exist
let obj = { name: "Shohan" };
console.log(obj.age); // undefined

// 4. Array index out of range
let arr = [10, 20];
console.log(arr[5]); // undefined

// 5. Function parameter not passed
function greet(name) {
  console.log(name);
}
greet(); // undefined

// 6. Explicitly assign
let x = undefined;
console.log(x); // undefined
let y = null;
console.log(y); // null

// 7. Deleting a property
let person = { name: "Shohan", age: 22 };
delete person.age;
console.log(person.age); // undefined
console.log(person); // { name: "Shohan" }
console.log(typeof person.age); // undefined