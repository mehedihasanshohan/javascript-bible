const searchInput = document.getElementById("search");
const resultsList = document.getElementById("results");

function debounce(fn, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), delay);
  };
}

async function fetchGitHubUsers(query) {
  if (!query) {
    resultsList.innerHTML = "";
    return;
  }

  const res = await fetch(`https://api.github.com/search/users?q=${query}`);
  const data = await res.json();

  if (data.items && data.items.length > 0) {
    resultsList.innerHTML = data.items
      .slice(0, 10)
      .map(
        (user) => `
      <li>
        <img src="${user.avatar_url}" alt="${user.login}" />
        <div>
          <strong>${user.login}</strong><br />
          <a href="${user.html_url}" target="_blank">View Profile</a>
        </div>
      </li>
    `
      )
      .join("");
  } else {
    resultsList.innerHTML = "<li>No users found.</li>";
  }
}

const debouncedSearch = debounce((e) => {
  fetchGitHubUsers(e.target.value.trim());
}, 500);

searchInput.addEventListener("input", debouncedSearch);
