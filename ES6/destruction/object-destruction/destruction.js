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