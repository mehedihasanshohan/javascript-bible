# JavaScript Scope: Block Scope vs Global Scope

In JavaScript, **scope** determines the accessibility (visibility) of variables.
The two most common types of scope are **Global Scope** and **Block Scope**.

---

## 1. Global Scope

- A variable declared **outside any function or block** is in the global scope.
- It can be accessed from **anywhere in the program**.

```js
// Global variable
let globalVar = "I am global";

function test() {
  console.log(globalVar); // ✅ Accessible here
}

test();
console.log(globalVar);   // ✅ Accessible here too


# JavaScript Scopes (Global, Block, Function, Module, Lexical)

In JavaScript, **scope** defines where variables can be accessed in code.
Here are all the major types of scope you should know:

---

## 1. Global Scope 🌍
- Declared outside any function/block.
- Accessible **everywhere** in the program.

```js
let globalVar = "I am global";

function test() {
  console.log(globalVar); // ✅ Accessible
}

console.log(globalVar);   // ✅ Accessible



# JavaScript Function Scope

In JavaScript, a **function scope** means that variables declared inside a function are **accessible only within that function**, not outside of it.

---

## 1. Function Scope with `var`
- `var` is **function-scoped** (not block-scoped).
- It means if declared inside a function, it’s available everywhere in that function.

```js
function myFunc() {
  var message = "I am inside function scope";
  console.log(message); // ✅ Accessible here
}

myFunc();
console.log(message); // ❌ ReferenceError: message is not defined
