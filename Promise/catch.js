new Promise((resolve, reject) => {
  reject("❌ Something went wrong");
})
  .then((res) => {
    console.log("This won't run");
  })
  .catch((err) => {
    console.log("Error caught:", err); // ✅ Catch block runs
  });

  