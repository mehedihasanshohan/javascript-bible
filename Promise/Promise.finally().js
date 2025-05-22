new Promise((resolve, reject) => {
  reject("Failed");
})
  .then((res)=>{
    console.log(res);
  })
  .catch((err) => {
    console.log("Caught:", err);
  })
  .finally(() => {
    console.log("✅ Cleanup done");
  });


  // cleanup done