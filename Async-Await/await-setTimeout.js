const { startTransition } = require("react");

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("⏳ Delay done");
    }, ms);
  });
}

async function run() {
  console.log("✅ Start");

  const result = await delay(2000); // এখানে ২ সেকেন্ড অপেক্ষা করবে
  console.log(result);              // 👉 '⏳ Delay done'

  console.log("🏁 End");
}

run();


// output
// start
// 2sec wait here
// delay done
// end