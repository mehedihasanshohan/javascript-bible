// var is not blocked scoped
{
  var notBlock = "I ignore block scope";
}
console.log(notBlock); //  Accessible (function-scoped instead)



// let and const are block scoped
{
  let blockLet = "I respect block scope";
  const blockConst = "I also respect block scope";
  console.log(blockLet); //  Accessible
  console.log(blockConst); // Accessible
}
console.log(blockLet); //  ReferenceError: blockLet is not defined
console.log(blockConst); //  ReferenceError: blockConst is not defined




// Variables declared inside a block { } using let or const are block-scoped.
// They cannot be accessed outside that block.
// var does not respect block scope (it is function-scoped instead).