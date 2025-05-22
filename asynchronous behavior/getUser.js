const img = document.getElementById('user-img');
const nameEl = document.getElementById('user-name');
const emailEl = document.getElementById('user-email');
const button = document.getElementById('get-user');

async function getUser() {
  try {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    const user = data.results[0];

    img.src = user.picture.large;
    nameEl.textContent = `${user.name.first} ${user.name.last}`;
    emailEl.textContent = user.email;
  } catch (error) {
    console.error('Error fetching user:', error);
  }
}

button.addEventListener('click', getUser);

// Load one user by default
getUser();
