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
