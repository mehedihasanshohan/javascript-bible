const original = [1, 2, 3];
const copy = [...original];  // shallow copy

copy[0] = 100;

console.log(original); // 👉 [1, 2, 3] (unchanged)
console.log(copy);     // 👉 [100, 2, 3]
