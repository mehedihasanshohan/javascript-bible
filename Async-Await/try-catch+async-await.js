async function getData() {
  try {
    const res = await fetch("https://invalid-url");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error("❌ Caught:", error.message);
  }
}
getData();
