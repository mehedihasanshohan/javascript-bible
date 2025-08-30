// 1. Array copy
const arr = [1, 2, 3];
const copy = [...arr];
console.log(copy); // [1, 2, 3]

// 2. Array merge
const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b];
console.log(merged); // [1, 2, 3, 4]

// 3. Add element while copying
const arr2 = [1, 2, 3];
const newArr = [0, ...arr2, 4];
console.log(newArr); // [0, 1, 2, 3, 4]

// 4. String → Array
const str = "hello";
const chars = [...str];
console.log(chars); // ["h", "e", "l", "l", "o"]

// 5. Object copy
const obj = { name: "Shohan", age: 22 };
const copyObj = { ...obj };
console.log(copyObj); // { name: "Shohan", age: 22 }

// 6. Object merge
const user = { name: "Shohan" };
const info = { age: 22, country: "BD" };
const mergedObj = { ...user, ...info };
console.log(mergedObj); // { name: "Shohan", age: 22, country: "BD" }

// 7. Update property while copying
const student = { name: "Rahat", age: 20 };
const updated = { ...student, age: 21 };
console.log(updated); // { name: "Rahat", age: 21 }

// 8. Rest parameter (opposite of spread)
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

// 9. Pass array as arguments
function add(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];
console.log(add(...numbers)); // 6

// 10. Nested array shallow copy
const nested = [[1], [2]];
const shallow = [...nested];
shallow[0][0] = 99;
console.log(nested); // [[99], [2]] 
