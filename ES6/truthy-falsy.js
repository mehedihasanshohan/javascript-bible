//  undefined is a falsy value
let salery;
console.log(salery); // undefined
if (salery) {
  console.log("You are rich!");
} else {
  console.log("You are poor!");
} // You are poor!



//  zero is a falsy value
let money = 0;
if (money) {
  console.log("You are rich!");
} else {
  console.log("You are poor!");
} // You are poor!


//  empty string is a falsy value
let name = "";
if (name) {
  console.log("You are rich!");
} else {
  console.log("You are poor!");
} // You are poor!


//  null is a falsy value
let job = null;
if (job) {
  console.log("You are rich!");
} else {
  console.log("You are poor!");
} // You are poor!


//  NaN is a falsy value
let fun = NaN;
if (fun) {
  console.log("You are rich!");
} else {
  console.log("You are poor!");
} // You are poor!

//  non-empty string is a truthy value
let name2 = "Shohan";
if (name2) {
  console.log("You are rich!");
} else {
  console.log("You are poor!");
} // You are rich!

//  non-zero number is a truthy value
let money2 = 500;
if (money2) {
  console.log("You are rich!");
} else {
  console.log("You are poor!");
} // You are rich!


// empty object and array are truthy values
let obj = {};
let arr = [];
if (obj) {
  console.log("You are rich!");
} else {
  console.log("You are poor!");
} // You are rich!
if (arr) {
  console.log("You are rich!");
} else {
  console.log("You are poor!");
} // You are rich!