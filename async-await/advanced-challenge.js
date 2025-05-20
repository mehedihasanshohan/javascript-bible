console.log("🎬 Start");

Promise.resolve().then(() => {
  console.log("🥇 Microtask 1");

  queueMicrotask(() => {
    console.log("🥈 Microtask 2");

    Promise.resolve().then(() => {
      console.log("🥉 Microtask 3");
    });
  });

  setTimeout(() => {
    console.log("⏰ Timeout 1");
  }, 0);
});

setTimeout(() => {
  console.log("⏰ Timeout 2");

  Promise.resolve().then(() => {
    console.log("🏅 Microtask inside Timeout");
  });
}, 0);

console.log("🏁 End");



// output
//  Start              // Sync
//  End                // Sync
//  Microtask 1        // Promise.then (Microtask)
//  Microtask 2        // queueMicrotask inside Microtask
//  Microtask 3        // Promise inside queueMicrotask
//  Timeout 1          // setTimeout from first then
//  Timeout 2          // second setTimeout
//  Microtask inside Timeout  // Promise inside Timeout 2