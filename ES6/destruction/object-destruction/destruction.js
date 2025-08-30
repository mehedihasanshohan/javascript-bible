// basic object destructuring
// 1. Basic
const user1 = { name1: "Shohan", age1: 22 };
const { name1, age1 } = user1;
console.log(name1, age1); // Shohan 22

// 2. Rename variable
const { name: userName } = user;
console.log(userName); // Shohan

// 3. Default value
const { hobby = "coding" } = user;
console.log(hobby); // coding

// 4. Nested destructure
const student = { info: { id: 1, dept: "CSE" } };
const { info: { id, dept } } = student;
console.log(id, dept); // 1 CSE

// 5. With rest operator
const { name: n, ...others } = user;
console.log(n, others); // Shohan { age: 22 }

// 6. Function parameter destructure
function printUser({ name, age }) {
  console.log(`${name} is ${age}`);
}
printUser(user); // Shohan is 22
// 7. Destructure in loop
const users = [
  { name: "Shohan", age: 22 },
  { name: "Rahat", age: 20 },
];
for (const { name, age } of users) {
  console.log(`${name} is ${age}`);
}


// rename variables while destructuring
const user = { name: "Shohan", age: 22 };
const { name, age } = user;

console.log(name); // Shohan  (variable)
console.log(age);  // 22      (variable)
console.log(user.name); // Shohan  (object key)
console.log(user.age);  // 22     (object key)
console.log(user); // { name: "Shohan", age: 22 } (object)

//shortcut memory tips:
// { keyName } → variable name same as key
// { keyName: newVar } → variable name = newVar, key stays same
// { keyName: newVar = defaultValue } → variable name = newVar or defaultValue if undefined, key stays same