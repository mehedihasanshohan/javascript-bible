// Variables declared inside a function are accessible only within that function.
// Applies to var, let, and const.


 function myFunc() {
  var funcVar = "I am function scoped";
  let anotherVar = "Me too!";
  console.log(funcVar);   //  Accessible
  console.log(anotherVar);//  Accessible
}

myFunc();
console.log(funcVar);    // ReferenceError
console.log(anotherVar); // ReferenceError
// Variables declared with var, let, or const inside a function cannot be accessed outside that function.
// They are function-scoped, meaning they exist only within the function they are defined in.
