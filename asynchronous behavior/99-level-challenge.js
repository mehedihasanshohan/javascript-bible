console.log("🥇 Start");

async function level99() {
  console.log("🧠 Inside async function");

  setTimeout(() => {
    console.log("⏰ Timeout inside async");
  }, 0);

  await Promise.resolve().then(() => {
    console.log("🔮 Await thenable resolved");
  });

  console.log("✅ After await");

  queueMicrotask(() => {
    console.log("📌 Microtask inside async after await");
  });

  Promise.resolve().then(() => {
    console.log("🔁 Thenable inside async after await");
  });
}

queueMicrotask(() => {
  console.log("📌 Global microtask");
});

level99();

Promise.resolve().then(() => {
  console.log("🔁 Global thenable 1");
});

setTimeout(() => {
  console.log("⏰ Global timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("🔁 Global thenable 2");
});

console.log("🏁 End");


// answers
//  Start
//  Inside async function
//  End
//  Global microtask
//  Await thenable resolved
//  After await
//  Microtask inside async after await
//  Thenable inside async after await
//  Global thenable 1
//  Global thenable 2
//  Timeout inside async
//  Global timeout
