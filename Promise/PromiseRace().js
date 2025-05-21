const slow = new Promise((res) => setTimeout(() => res("🐢 Slow"), 300));
const fast = new Promise((res) => setTimeout(() => res("🐇 Fast"), 100));

Promise.race([slow, fast]).then(console.log); // 🐇 Fast
