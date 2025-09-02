# Pass by Value vs Pass by Reference in JavaScript (Advanced)

In JavaScript, function arguments are passed **by value**, but the type of value determines how it behaves.
For **primitive types**, the value itself is copied.
For **non-primitive types** (objects, arrays, functions), the reference (memory address) is copied.

---

## 🔹 Pass by Value
- Works with **primitive data types** (Number, String, Boolean, Null, Undefined, Symbol, BigInt).
- The function gets a copy of the value.
- Changes inside the function do **not** affect the original variable.

### Example:
```js
function changeValue(x) {
  x = x + 10;
  console.log("Inside function:", x);
}

let a = 5;
changeValue(a);

console.log("Outside function:", a); // 5 (unchanged)



# Pass by Reference in JavaScript

## 📌 What is Pass by Reference?
Pass by reference means when you pass an object (like arrays or objects in JavaScript) into a function, the function receives a **reference** to the same memory location.
So, changes made inside the function **affect the original object**.

---

## ❓ Why does it happen?
In JavaScript, **objects and arrays** are stored in the heap memory. When you assign or pass them, only the **reference (memory address)** is copied, not the actual value.

---

## ⏰ When is it used?
- When working with **arrays and objects**.
- When you want to modify the original object inside a function.
- Useful in cases like updating data structures, sharing state, etc.

---

## 💡 How does it work?
- Objects/Arrays → passed by **reference**.
- Functions get a reference (pointer) to the object, not a copy.
- Modifications inside the function reflect in the original object.

---

## 🔥 Example

```js
function updatePerson(person) {
  person.age = 25; // modifies original object
}

let obj = { name: "Shohan", age: 20 };

updatePerson(obj);

console.log(obj);
// Output: { name: "Shohan", age: 25 }

