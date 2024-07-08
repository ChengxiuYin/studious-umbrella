console.log("this works");

let input = document.querySelector(".zipcode");
let btn = document.querySelector(".search-button");
let weatherResult = document.getElementById('weather-result');

const API_KEY = config.WEATHER_API_KEY;

const getWeatherData = (zip) => {
  const API_ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${API_KEY}`;

  fetch(API_ENDPOINT)
    .then(response => response.json())
    .then(data => {
      let local_weather_data = data;
      console.log(local_weather_data);
      displayWeather(local_weather_data);
    })
    .catch(error => {
      console.error('Error fetching the weather data:', error);
    });
};

const getZipCode = (e) => {
  e.preventDefault();
  let ZIP_CODE = input.value;
  getWeatherData(ZIP_CODE);
};

const displayWeather = (data) => {
  if (data.cod === 200) {
    const weatherDescription = data.weather[0].description;
    const temperature = (data.main.temp - 273.15).toFixed(2); // Convert from Kelvin to Celsius
    weatherResult.innerHTML = `Weather: ${weatherDescription}<br>Temperature: ${temperature}°C`;
  } else {
    weatherResult.innerHTML = `Error: ${data.message}`;
  }
};

btn.addEventListener("click", getZipCode);