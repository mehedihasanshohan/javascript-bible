new Promise((resolve, reject) => {
  resolve(10);
})
  .then((val) => {
    console.log("1st Then:", val); // 10
    return val * 2;
  })
  .then((val) => {
    console.log("2nd Then:", val); // 20
    return val + 5;
  })
  .then((val) => {
    console.log("3rd Then:", val); // 25
  });


  // output
//  1st Then: 10
//  2nd Then: 20
//  3rd Then: 25