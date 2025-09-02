# Callback Functions in JavaScript

## ❓ What
A **callback function** is a function that is passed as an argument to another function and executed later.

---

## 🧐 Why
- Helps write **reusable** and **modular** code.
- Useful for handling **asynchronous operations** (e.g., fetching data from an API).
- Allows customization of function behavior.

---

## ⚙️ How
1. Define a function.
2. Pass it as an argument to another function.
3. The receiving function calls it when needed.

---

## ⏰ When
- When performing asynchronous tasks like:
  - API requests
  - Reading files
  - Timers (`setTimeout`, `setInterval`)
- When you want to **decouple logic** and make functions more flexible.

---

## ✅ Example

```javascript
// Step 1: Define a callback function
function greet(name) {
  console.log("Hello, " + name + "!");
}

// Step 2: Higher-order function that takes a callback
function processUserInput(callback) {
  const userName = "Shohan";
  callback(userName);
}

// Step 3: Pass greet as a callback
processUserInput(greet);
// Output: Hello, Shohan!
