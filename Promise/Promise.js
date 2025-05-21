let promise = new Promise((resolve, reject) => {
  // প্রথমে resolve হয়ে যাওয়ায়, নিচের সব কিছু আর কাজ করবে না
  resolve("✅ Done");

  // ❌ এই reject আর কাজ করবে না
  reject(new Error("❌ Error - Ignored"));

  // ❌ এই async resolve-ও আর কাজ করবে না
  setTimeout(() => resolve("⏱️ Late resolve - Ignored"), 1000);
});

promise.then(result => console.log(result)); // Output: ✅ Done

// example-2
// use of .then
promise.then(
  function(result) { /* handle a successful result */ },
  function(error) { /* handle an error */ }
);
// The first argument of .then is a function that runs when the promise is resolved and receives the result.
// The second argument of .then is a function that runs when the promise is rejected and receives the error.

