const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const button = document.getElementById("get-quote");

async function getQuote() {
  try {
    quoteEl.innerText = "Loading...";
    authorEl.innerText = "";

    const response = await fetch("https://api.quotable.io/random");
    if (!response.ok) {
      throw new Error("Failed to fetch quote");
    }

    const data = await response.json();
    quoteEl.innerText = `"${data.content}"`;
    authorEl.innerText = `— ${data.author}`;
  } catch (error) {
    quoteEl.innerText = "Something went wrong!";
    authorEl.innerText = "";
    console.error("❌ Error:", error.message);
  }
}

button.addEventListener("click", getQuote);

// Initial quote load
getQuote();
