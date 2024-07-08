/* let input = document.querySelector(".zipcode");
let btn = document.querySelector(".search-button");
let form = document.querySelector("form");

let CITY_NAME = document.querySelector(".city-name");
let CITY_TEMP = document.querySelector(".temperature");

let image = document.querySelector("img");

  // write a function to get weather data
const getWeatherData = (zip) => {
  const API_KEY = config.WEATHER_API_KEY;
  const API_ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&APPID=${API_KEY}`;

  form.reset();
  input.focus();

  fetch(API_ENDPOINT)
    .then((response) => response.json())
    .then((data) => {
      let local_weather_data = data;
      let WEATHER_ICON = local_weather_data.weather[0].icon

      CITY_NAME.textContent = local_weather_data.name;
      let weather_in_celsius = Math.round(
        local_weather_data.main.temp - 273
      );
      CITY_TEMP.textContent = weather_in_celsius + " C"
      image.setAttribute('src', `https://openweathermap.org/img/wn/${WEATHER_ICON}@2x.png`)
    })
}

const getZipcode = e=> {
  e.preventDefault();
  let ZIP_CODE = input.value;
  getWeatherData(ZIP_CODE);
}

btn.addEventListener('submit', getZipcode);

 */
document.addEventListener('DOMContentLoaded', function() {
    // Your code that interacts with DOM elements here
    let input = document.querySelector(".zipcode");
    let btn = document.querySelector(".search-button");
    let form = document.querySelector("form");
  
    let CITY_NAME = document.querySelector(".city-name");
    let CITY_TEMP = document.querySelector(".temperature");
    let image = document.querySelector("img");
  
    // Function to get weather data
    const getWeatherData = (zip) => {
      const API_KEY = config.WEATHER_API_KEY;
      const API_ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${API_KEY}`;
  
      form.reset();
      input.focus();
  
      fetch(API_ENDPOINT)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          let WEATHER_ICON = data.weather[0].icon;
          CITY_NAME.textContent = data.name;

          let weather_in_celsius = Math.round(data.main.temp - 273.15);
          CITY_TEMP.textContent = weather_in_celsius + " C";
          image.setAttribute('src', `https://openweathermap.org/img/wn/${WEATHER_ICON}@2x.png`);
        })
        .catch((error) => {
          console.error('Error fetching weather data:', error);
          alert('Failed to fetch weather data. Please try again later.');
        });
    }
  
    // Function to handle form submission
    const getZipcode = (e) => {
      e.preventDefault();
      let ZIP_CODE = input.value;
      getWeatherData(ZIP_CODE);
    }
  
    // Event listener for form submission
    btn.addEventListener('click', getZipcode);
  });