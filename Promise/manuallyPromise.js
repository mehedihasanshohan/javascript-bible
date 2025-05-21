const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("🎉 কাজ সফল হয়েছে");
  } else {
    reject("💥 কাজ ব্যর্থ হয়েছে");
  }
});

myPromise
  .then((result) => {
    console.log("Then:", result);
  })
  .catch((error) => {
    console.log("Catch:", error);
  });

// output
  // Then: কাজ সফল হয়েছে