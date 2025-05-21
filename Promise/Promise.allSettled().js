const p1 = Promise.resolve("✅ Done 1");
const p2 = Promise.reject("❌ Failed 2");

Promise.allSettled([p1, p2])
  .then((results) => {
    results.forEach((result) => {
      console.log(result.status, result.value || result.reason);
    });
  });

//  outputs
  // fulfilled ✅ Done 1
  // rejected ❌ Failed 2