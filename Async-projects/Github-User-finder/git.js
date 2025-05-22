const usernameInput = document.getElementById("username");
const searchBtn = document.getElementById("search");
const resultCard = document.getElementById("result");
const avatar = document.getElementById("avatar");
const nameEl = document.getElementById("name");
const bio = document.getElementById("bio");
const repos = document.getElementById("repos");
const profileLink = document.getElementById("profileLink");
const errorEl = document.getElementById("error");

async function fetchUser(username) {
  try {
    errorEl.innerText = "";
    resultCard.classList.add("hidden");

    const res = await fetch(`https://api.github.com/users/${username}`);
    if (!res.ok) throw new Error("User not found");

    const data = await res.json();

    avatar.src = data.avatar_url;
    nameEl.innerText = data.name || data.login;
    bio.innerText = data.bio || "No bio available";
    repos.innerText = data.public_repos;
    profileLink.href = data.html_url;

    resultCard.classList.remove("hidden");
  } catch (error) {
    errorEl.innerText = "❌ " + error.message;
  }
}

searchBtn.addEventListener("click", () => {
  const username = usernameInput.value.trim();
  if (username) {
    fetchUser(username);
  }
});
