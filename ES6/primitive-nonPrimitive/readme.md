# 📚 JavaScript Data Types – Primitive vs Non-Primitive

JavaScript এ ডেটা টাইপ দুই ভাগে বিভক্ত 👉
**Primitive** (সহজ, ছোট) আর **Non-Primitive** (জটিল, reference type)।
এই repo তে দুইটার ছোট ছোট example দেওয়া হলো, যাতে easily বুঝতে পারো।

---

### 💻 Data Types Overview

* **Primitive Data Types**: Stored by *value*
  - String
  - Number
  - Boolean
  - Undefined
  - Null
  - Symbol
  - BigInt

* **Non-Primitive (Reference) Data Types**: Stored by *reference*
  - Object
  - Array
  - Function

---

### 🚀 Primitive Examples

```js
// Number
let age = 25;

// String
let name = "JavaScript";

// Boolean
let isCool = true;

// Undefined
let x;

// Null
let y = null;

// Symbol
let uniqueId = Symbol("id");

// BigInt
let big = 12345678901234567890n;


# Primitive vs Non-Primitive Data Types in JavaScript

| Feature / Type             | Primitive Data Types                                | Non-Primitive Data Types                        |
|-----------------------------|----------------------------------------------------|------------------------------------------------|
| **Definition**              | Immutable (change করা যায় না, copy হলে আলাদা হয়)  | Mutable (change করা যায়, reference শেয়ার হয়)  |
| **Stored in**               | Stack (value direct store হয়)                     | Heap (reference/address store হয়)              |
| **Data Types**              | `String`, `Number`, `Boolean`, `Undefined`, `Null`, `Symbol`, `BigInt` | `Object`, `Array`, `Function`, `Date`, ইত্যাদি |
| **Copy Behavior**           | Copy করলে নতুন value তৈরি হয়                      | Copy করলে শুধু reference শেয়ার হয়              |
| **Comparison**              | Value দিয়ে compare হয়                             | Reference (memory address) দিয়ে compare হয়     |
| **Example**                 | ```js\nlet a = 10;\nlet b = a;\nb = 20;\nconsole.log(a); // 10\n``` | ```js\nlet obj1 = {x: 1};\nlet obj2 = obj1;\nobj2.x = 5;\nconsole.log(obj1.x); // 5\n``` |
| **Mutability**              | Immutable                                         | Mutable                                        |

---

### Quick Summary
- **Primitive** = Value-based, immutable, stored in stack.
- **Non-Primitive** = Reference-based, mutable, stored in heap.
