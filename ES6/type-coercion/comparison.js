// Arithmetic type coercion examples
console.log('5' * 2);      // 10
console.log('5' - 2);      // 3
console.log('5' + 2);      // '52'
console.log(true + 1);     // 2
console.log(false + 5);    // 5
console.log(null + 1);     // 1
console.log(undefined + 1);// NaN
console.log([] + []);      // ''
console.log([1] + [2]);    // '12'


console.log(typeof NaN);   // 'number'
console.log(typeof null);  // 'object'
console.log([] == ![]);    // true
console.log({} == {});     // false
console.log(0 == '\n');    // true
console.log(' \t\r\n' == 0); // true
console.log('0' == false); // true
console.log('' == false); // true
console.log([] == false); // true
console.log([1] == true); // true
console.log([1,2] == '1,2'); // true
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(' \t\r\n ' == 0); // true
console.log(' \t\r\n ' === 0); // false
console.log('0' === false); // false
console.log('' === false); // false


// Always use strict equality to avoid surprises
// console.log([] === '');    // false
// console.log('5' === ['5']); // false

// Checking NaN correctly
console.log(Number.isNaN(NaN)); // true
