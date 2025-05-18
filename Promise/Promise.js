let promise = new Promise((resolve, reject) => {
  // প্রথমে resolve হয়ে যাওয়ায়, নিচের সব কিছু আর কাজ করবে না
  resolve("✅ Done");

  // ❌ এই reject আর কাজ করবে না
  reject(new Error("❌ Error - Ignored"));

  // ❌ এই async resolve-ও আর কাজ করবে না
  setTimeout(() => resolve("⏱️ Late resolve - Ignored"), 1000);
});

promise.then(result => console.log(result)); // Output: ✅ Done
