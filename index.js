function showTemperature(response) {
  let temperatureElement = document.querySelector('.weather-app-temperature');
  let temperature = Math.round(response.data.temperature.current);
  temperatureElement.innerHTML = `${temperature}`;
}
function searchCity(city) {
  let apiKey = "83ff5f4d2142b0ao5dc9eta527f4af13";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(showTemperature);
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
