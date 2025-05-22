// 📦 Step 1: User fetch করা
async function fetchUser() {
  console.log("📡 Fetching user...");
  // Error inject করছি এখানে
  throw new Error("❌ User fetch failed!");
}

// 📦 Step 2: User দিয়ে post fetch করার চেষ্টা
async function fetchPosts(user) {
  console.log("📝 Fetching posts for", user.name);
  return ["post1", "post2"];
}

// 📦 Step 3: Main ফাংশন
async function loadApp() {
  try {
    const user = await fetchUser(); // এখানে error আসবে
    const posts = await fetchPosts(user);
    console.log("✅ Posts:", posts);
  } catch (err) {
    console.error("🚨 Final catch:", err.message);
  }
}

// Run the app
loadApp();



// output
// 🚨 Final catch: ❌ User fetch failed!

//
// fetchUser() ফাংশন throw করবে।
// fetchPosts() আর console.log() কিছুই চলবে না।
// Error propagate হয়ে loadApp() এর catch ব্লকে গিয়ে ধরা পড়বে।