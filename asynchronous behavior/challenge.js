console.log("🍉 1");

setTimeout(() => {
  console.log("🍊 2");

  Promise.resolve().then(() => {
    console.log("🍌 3");
  });

}, 0);

Promise.resolve().then(() => {
  console.log("🍇 4");

  setTimeout(() => {
    console.log("🍍 5");
  }, 0);
});

queueMicrotask(() => {
  console.log("🍓 6");
});

console.log("🥝 7");


// answer
 1      // Sync
 7      // Sync
 4      // Microtask (Promise.then)
 6      // Microtask (queueMicrotask)
 2      // Callback queue (setTimeout)
 3      // Microtask inside setTimeout
 5      // Callback inside Promise.then