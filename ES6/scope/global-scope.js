// Global Scope Example

var globalVar = "I am a global variable";
let globalLet = "I am also global";
const globalConst = "I am a global constant";

function showGlobals() {
  console.log(globalVar);   // ✅ Accessible
  console.log(globalLet);   // ✅ Accessible
  console.log(globalConst); // ✅ Accessible
}

showGlobals();

console.log(globalVar);     // ✅ Accessible
console.log(globalLet);     // ✅ Accessible
console.log(globalConst);   // ✅ Accessible

// Global variables are accessible anywhere in the code
function anotherFunc() {
  console.log(globalVar);   // ✅ Still accessible
}
anotherFunc();




// Variables declared outside any function or block are in global scope.
// Accessible from anywhere, including inside functions.
// Avoid creating too many globals to prevent conflicts.
// var globals become properties of the window object in browsers, while let/const do not.