const p1 = Promise.reject("❌");
const p2 = Promise.resolve("✅ Success");

Promise.any([p1, p2])
  .then((result) => {
    console.log("Result:", result); // ✅ Success
  })
  .catch((error) => {
    console.error("Error:", error);
  });
