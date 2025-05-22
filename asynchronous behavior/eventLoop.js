console.log("🏁 Start");

setTimeout(() => {
  console.log("⏰ Timeout 1");

  Promise.resolve().then(() => {
    console.log("📌 Microtask inside Timeout 1");
  });
}, 0);

queueMicrotask(() => {
  console.log("🌀 Microtask 1");
});

Promise.resolve().then(() => {
  console.log("💎 Promise 1");

  queueMicrotask(() => {
    console.log("🧵 Microtask inside Promise 1");
  });
});

(async function () {
  console.log("🚀 Inside Async");

  await null;

  console.log("🛸 After Await");

  setTimeout(() => {
    console.log("⏰ Timeout 2");
  }, 0);

  Promise.resolve().then(() => {
    console.log("🌟 Thenable inside Async After Await");
  });

  queueMicrotask(() => {
    console.log("🎯 Microtask inside Async After Await");
  });
})();

console.log("🔚 End");


// answers
//  Start
//  Inside Async
//  End
//  Microtask 1
//  Promise 1
//  Microtask inside Promise 1
//  After Await
//  Microtask inside Async After Await
//  Thenable inside Async After Await
//  Timeout 1
//  Microtask inside Timeout 1
//  Timeout 2
