function showTemperature(response) {
  let temperatureElement = document.querySelector('.weather-app-temperature');
  let temperature = Math.round(response.data.temperature.current);
  temperatureElement.innerHTML = `${temperature}`;
  let descriptionElement = document.querySelector('#description');
  descriptionElement.innerHTML = response.data.condition.description;
  let humidityElement = document.querySelector('#humidity');
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  let windElement = document.querySelector('#wind');
  windElement.innerHTML = `${Math.round(response.data.wind.speed)} km/h`;
  let timeElement = document.querySelector('#time');
  timeElement.innerHTML = formatDate(new Date(response.data.time * 1000));
  let date = new Date(response.data.time * 1000);
  let iconElement = document.querySelector('#icon');
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="Weather-app-icon">`;
}
  
  
function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = days[date.getDay()];
  if (minutes < 10) {
    minutes = `0${minutes}`;
   } 
  return `${day} ${hours}:${minutes}`;
}




function searchCity(city) {
  let apiKey = "83ff5f4d2142b0ao5dc9eta527f4af13";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(showTemperature);
}

function displayForecast() {
  let days = ["Tue", "Wed", "Thu", "Fri", "Sat"];
  let forecastHtml = "";

  days.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      `
      <div class="weather-forecast-day">
        <div class="weather-forecast-date">${day}</div>
        <div class="weather-forecast-icon">🌤️</div>
        <div class="weather-forecast-temperatures">
          <div class="weather-forecast-temperature">
            <strong>15º</strong>
          </div>
          <div class="weather-forecast-temperature">9º</div>
        </div>
      </div>
    `;
  });
    let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHtml;
}

function changeCity(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector(".search-form-input");
  let cityElement = document.querySelector('.weather-app-city');
  cityElement.innerHTML = cityInputElement.value;
  let city = cityInputElement.value;
  searchCity(city);
}

let searchFormElement = document.querySelector('.search-form');
searchFormElement.addEventListener("submit", changeCity); 


displayForecast();