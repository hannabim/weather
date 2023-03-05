//Feature #1
let now = new Date();
function displayCurrentTime(now) {
  let date = now.getDate();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[now.getMonth()];
  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let weekday = weekdays[now.getDay()];
  let hour = now.getHours();
  let minute = now.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let currentDay = `${weekday}, ${month} ${date}, ${hour}:${minute}`;
  let screenDate = document.querySelector("#date");
  screenDate.innerHTML = currentDay;
}
displayCurrentTime(now);
//Feature #2
//Change city weather
function displayCurrentCity(responce) {
  let cityName = document.querySelector("#city");
  let city = responce.data.name;
  cityName.innerHTML = city;
}
function changeCityTemperature(responce) {
  let cityTemperature = document.querySelector("#temperature");
  let temperature = Math.round(responce.data.main.temp);
  cityTemperature.innerHTML = temperature;
}

function changeWeatherCondition(responce) {
  let weather = document.querySelector("#description");
  let weatherCondition = responce.data.weather[0].main;
  weather.innerHTML = weatherCondition;
  changeIcon(weatherCondition);
}
function changeHumidity(responce) {
  let humidity = document.querySelector("#humidity");
  let humidityValue = responce.data.main.humidity;
  humidity.innerHTML = humidityValue;
}
function changeWind(responce) {
  let wind = document.querySelector("#wind-speed");
  let windValue = Math.round(responce.data.wind.speed);
  wind.innerHTML = windValue;
}
function changeIcon(weatherCondition) {
  let icon = document.querySelector("#weather-icon");
  let iconName = "fa-temperature-three-quarters";
  if (weatherCondition === "Clouds") {
    icon.classList.replace(iconName, "fa-cloud");
  } else if (weatherCondition === "Thunderstorm") {
    icon.classList.replace(iconName, "fa-tornado");
  } else if (weatherCondition === "Clear") {
    icon.classList.replace(iconName, "fa-sun");
  } else if (weatherCondition === "Atmosphere") {
    icon.classList.replace(iconName, "fa-smog");
  } else if (weatherCondition === "Snow") {
    icon.classList.replace(iconName, "fa-snow");
  } else if (weatherCondition === "Rain" || "Drizzle") {
    icon.classList.replace(iconName, "fa-cloud-rain");
  }
}
function cityTemperature(responce) {
  changeCityTemperature(responce);
  changeWeatherCondition(responce);
  changeHumidity(responce);
  changeWind(responce);
  displayCurrentCity(responce);
}
function searchCity(event) {
  event.preventDefault();
  let searchResult = document.querySelector("#search-city");

  let units = "metric";
  let apiKey = "35508be96ee4e5cd4520c32d236240eb";
  let apiEndPoint = "https://api.openweathermap.org/data/2.5/weather?";
  let apiUrl = `${apiEndPoint}q=${searchResult.value}&appid=${apiKey}&units=${units}`;
  if (searchResult.value) {
    axios.get(apiUrl).then(cityTemperature);
  } else {
    alert("Please enter a city!");
  }
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchCity);

function currentLocation(event) {
  event.preventDefault();
  function showTemperature(responce) {
    displayCurrentCity(responce);
    changeCityTemperature(responce);
    changeWeatherCondition(responce);
    changeHumidity(responce);
    changeWind(responce);
  }
  function displayPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let units = "metric";
    let apiKey = "35508be96ee4e5cd4520c32d236240eb";
    let apiEndPoint = "https://api.openweathermap.org/data/2.5/weather?";
    let apiUrl = `${apiEndPoint}lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showTemperature);
  }

  navigator.geolocation.getCurrentPosition(displayPosition);
}
function DefaultCity(city) {
  let units = "metric";
  let apiKey = "35508be96ee4e5cd4520c32d236240eb";
  let apiEndPoint = "https://api.openweathermap.org/data/2.5/weather?";
  let apiUrl = `${apiEndPoint}q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(cityTemperature);
}
let current = document.querySelector("#current");
current.addEventListener("submit", currentLocation);
DefaultCity("Kyiv");
