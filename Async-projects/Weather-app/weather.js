
const API_KEY = "df7f2ec2917863d8f7bc81a56ec9469a";

async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const result = document.getElementById("weatherResult");

  if (!city) {
    result.innerHTML = "<p>Please enter a city name.</p>";
    return;
  }

  try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    if (!res.ok) throw new Error("City not found");

    const data = await res.json();

    const icon = data.weather[0].icon;
    const temp = data.main.temp;
    const desc = data.weather[0].description;
    const country = data.sys.country;

    result.innerHTML = `
      <h2>${data.name}, ${country}</h2>
      <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${desc}" />
      <p><strong>Temperature:</strong> ${temp}°C</p>
      <p><strong>Condition:</strong> ${desc}</p>
    `;
  } catch (error) {
    result.innerHTML = `<p>❌ ${error.message}</p>`;
  }
}
