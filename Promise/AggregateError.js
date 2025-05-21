const p1 = Promise.reject("❌ Error 1");
const p2 = Promise.reject("❌ Error 2");

Promise.any([p1, p2])
  .then((res) => {
    console.log("Result:", res);
  })
  .catch((err) => {
    console.error("Caught:", err); // AggregateError
  });
