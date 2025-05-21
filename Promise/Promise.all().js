const p1 = Promise.resolve("🍎");
const p2 = Promise.resolve("🍌");
const p3 = Promise.resolve("🍇");

Promise.all([p1, p2, p3])
  .then((results) => console.log("All fruits:", results))
  .catch((err) => console.log("Error:", err));
