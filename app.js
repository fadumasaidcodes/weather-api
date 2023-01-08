const apiKey = "3cd8358d9d4d2ea9e4780421c6abeba7";

document.getElementById("submitBtn").addEventListener("click", getWeather);

function getWeather(e) {
  e.preventDefault();

  const city = document.getElementById("city").value;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(res => res.json())
    .then(data => {
      const weatherInfo = document.getElementById("weather-info");
      weatherInfo.innerHTML = `
        <h2>Weather in ${data.name}:</h2>
        <p>Temperature: ${data.main.temp}&deg;C</p>
        <p>Feels like: ${data.main.feels_like}&deg;C</p>
        <p>Min. temperature: ${data.main.temp_min}&deg;C</p>
        <p>Max. temperature: ${data.main.temp_max}&deg;C</p>
        <p>Humidity: ${data.main.humidity}%</p>
      `;
    });
}
