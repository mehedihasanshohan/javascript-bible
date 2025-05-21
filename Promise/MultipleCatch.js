new Promise((resolve, reject) => {
  reject("Error happened");
})
  .catch((err) => {
    console.log("First catch:", err);
    throw "New error";
  })
  .catch((err) => {
    console.log("Second catch:", err);
  });

  // output
  // First catch: Error happened
  // Second catch: New error
