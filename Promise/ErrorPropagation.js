new Promise((resolve, reject) => {
  resolve("Start");
})
  .then((val) => {
    console.log(val);
    throw new Error("🚨 Boom!");
  })
  .then(() => {
    console.log("Will not run");
  })
  .catch((err) => {
    console.log("Caught:", err.message); // Catches the error
  });
