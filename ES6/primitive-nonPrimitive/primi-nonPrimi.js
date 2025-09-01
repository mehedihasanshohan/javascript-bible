// String
let name = "Shohan";
let anotherName = name;
anotherName = "Hasan";
console.log(name);        // Shohan (original change হয় নাই)
console.log(anotherName); // Hasan

// Number
let age = 25;
let newAge = age;
newAge = 30;
console.log(age);    // 25
console.log(newAge); // 30

// Boolean
let isMarried = true;
let copyMarried = isMarried;
copyMarried = false;
console.log(isMarried);   // true
console.log(copyMarried); // false

// Undefined
let x;
console.log(x); // undefined

// Null
let y = null;
console.log(y); // null

// Symbol
let s1 = Symbol("id");
let s2 = Symbol("id");
console.log(s1 === s2); // false (unique)

// BigInt
let big = 123456789012345678901234567890n;
console.log(big + 1n); // 123456789012345678901234567891n
console.log(typeof big); // bigint





// Object
let person = { name: "Shohan", age: 25 };
let anotherPerson = person;
anotherPerson.age = 30;
console.log(person.age);        // 30 (original change হয়ে গেছে)
console.log(anotherPerson.age); // 30

// Array
let numbers = [1, 2, 3];
let copyNumbers = numbers;
copyNumbers.push(4);
console.log(numbers);     // [1, 2, 3, 4] (original change হয়ে গেছে)
console.log(copyNumbers); // [1, 2, 3, 4]

// Function
function greet() {
  return "Hello!";
}
let sayHello = greet;
console.log(sayHello()); // Hello!
console.log(greet === sayHello); // true (same reference)