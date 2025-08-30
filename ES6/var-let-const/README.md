# Final Note – JavaScript Concepts

## 1. var vs let vs const

### var
- Function scoped
- Re-declare & re-assign করা যায়
- Hoisting হয় (default value `undefined` হয়)

### let
- Block scoped
- Re-assign করা যায়, কিন্তু re-declare করা যায় না
- Hoisting হয়, কিন্তু TDZ এ থাকে (error দেয়)

### const
- Block scoped
- Re-declare করা যায় না, re-assign ও করা যায় না
- Hoisting হয়, কিন্তু TDZ এ থাকে (error দেয়)

---

## 2. Hoisting
- Hoisting মানে হলো variable এবং function declaration উপরে তুলে নেওয়া।
- `var` hoist হয় **with default value = undefined**
- `let` এবং `const` hoist হয় কিন্তু **TDZ এ থাকে**, তাই ব্যবহার করলে error হয়।
- Function declaration পুরো body সহ hoist হয়।

---

## 3. TDZ (Temporal Dead Zone)
- `let` এবং `const` এর জন্য একটা সময় থাকে যেটাকে **TDZ** বলে।
- Declaration এর আগে variable এ access করলে **ReferenceError** দেয়।
- উদাহরণ:
```javascript
console.log(a); // ReferenceError
let a = 10;
