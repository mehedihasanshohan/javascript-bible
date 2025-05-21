new Promise((resolve, reject) => {
  reject("Failed");
})
  .catch((err) => {
    console.log("Caught:", err);
  })
  .finally(() => {
    console.log("✅ Cleanup done");
  });


  // cleanup done