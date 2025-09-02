// function arguments are passed by value for primitive types (like numbers, strings, booleans)
function changeValue(x) {
  x = x + 10;
  console.log("Inside function:", x);
}

let a = 5;
changeValue(a);

console.log("Outside function:", a);

// Inside function: 15
// Outside function: 5
// The variable a is not changed because a copy of 5 was passed.






// function arguments are passed by reference for objects (like arrays, objects)
function changeReference(obj) {
  obj.name = "Shohan";
  console.log("Inside Function:", obj);
}

let person = { name: "Mehedi" };
changeReference(person);
console.log("Outside Function:", person);
// Inside Function: { name: "Shohan" }
// Outside Function: { name: "Shohan" }
// The object person is changed because a reference to the object was passed.
