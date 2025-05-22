const jokeBtn = document.getElementById('getJoke');
const jokeText = document.getElementById('joke');

jokeBtn.addEventListener('click', async () => {
  try {
    const response = await fetch('https://icanhazdadjoke.com/', {
      headers: { Accept: 'application/json' }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch joke');
    }

    const data = await response.json();
    jokeText.innerText = data.joke;
  } catch (error) {
    jokeText.innerText = 'Something went wrong 😢';
    console.error('Error:', error.message);
  }
});
