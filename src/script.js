var today = new Date();
var day = today.getDay();
var daylist = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday ",
  "Thursday",
  "Friday",
  "Saturday"
];
let currentDay = document.querySelector("#current-date");
currentDay.innerHTML = daylist[day];

var hour = today.getHours();
var minute = today.getMinutes();

let currentTime = document.querySelector("#current-time");
currentTime.innerHTML = `Time: ${hour}:${minute}`;

////////

function display(event) {
  event.preventDefault();
  let city = document.querySelector("#city-name");
  let cityInput = document.querySelector("#search-engine");
  city.innerHTML = cityInput.value;
  searchCity(cityInput.value);
}

function searchCity(city) {
  let apiKey = "d3af8e250312355d158b815eefd2cb26";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemp);
}

let citySearch = document.querySelector("#form");
citySearch.addEventListener("submit", display);

////////

function showTemp(response) {
  let city = document.querySelector("#city-name");
  let h2 = document.querySelector("#temperature");
  let temp = Math.round(response.data.main.temp);
  city.innerHTML = response.data.name;
  h2.innerHTML = `${temp}`;
}
function getPositionTemperature(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "d3af8e250312355d158b815eefd2cb26";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemp);
}

function getTemperature() {
  navigator.geolocation.getCurrentPosition(getPositionTemperature);
}

let searchLocation = document.querySelector("#current");
searchLocation.addEventListener("click", getTemperature);
