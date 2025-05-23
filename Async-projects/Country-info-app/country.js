async function getCountryData() {
  const countryName = document.getElementById("countryInput").value.trim();
  const resultDiv = document.getElementById("result");

  if (!countryName) {
    resultDiv.innerHTML = "<p>Please enter a country name.</p>";
    return;
  }

  try {
    const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
    if (!res.ok) throw new Error("Country not found");

    const data = await res.json();
    const country = data[0];

    const languages = Object.values(country.languages || {}).join(", ");
    const currency = Object.values(country.currencies || {})[0]?.name || "N/A";

    resultDiv.innerHTML = `
      <img src="${country.flags.png}" alt="Flag" width="200" />
      <h2>${country.name.common}</h2>
      <p><strong>Capital:</strong> ${country.capital?.[0] || "N/A"}</p>
      <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
      <p><strong>Region:</strong> ${country.region}</p>
      <p><strong>Currency:</strong> ${currency}</p>
      <p><strong>Languages:</strong> ${languages}</p>
    `;
  } catch (error) {
    resultDiv.innerHTML = `<p>❌ ${error.message}</p>`;
  }
}
