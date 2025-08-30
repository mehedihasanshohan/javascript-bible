// basic
const arr = [10, 20, 30];
const [a, b, c] = arr;
console.log(a, b, c); // 10 20 30

// skip elements
const arr2 = [1, 2, 3, 4];
const [first, , third] = arr2;
console.log(first, third); // 1 3

// default values
const arr3 = [5];
const [x, y = 10] = arr3;
console.log(x, y); // 5 10

// rest pattern
const arr4 = [1, 2, 3, 4, 5];
const [head, ...tail] = arr4;
console.log(head); // 1
console.log(tail); // [2, 3, 4, 5]
