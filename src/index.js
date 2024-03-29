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
  celsiusTemperature = responce.data.main.temp;
  let temperature = Math.round(responce.data.main.temp);
  cityTemperature.innerHTML = temperature;
}

function changeWeatherCondition(responce) {
  let weather = document.querySelector("#description");
  let weatherIcon = responce.data.weather[0].icon;
  let weatherCondition = responce.data.weather[0].main;
  weather.innerHTML = weatherCondition;
  let iconId = document.querySelector("#weather-icon");
  changeIcon(weatherIcon, iconId);
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

function changeIcon(weatherIcon, iconId) {
  let classif = iconId;
  classif.className = " ";
  let icons = [];
  icons[1] = "fa-sun";
  icons[3] = "fa-cloud";
  icons[2] = "fa-cloud";
  icons[4] = "fa-cloud";
  icons[9] = "fa-cloud-rain";
  icons[10] = "fa-cloud-rain";
  icons[11] = "fa-tornado";
  icons[13] = "fa-snow";
  icons[50] = "fa-smog";
  let number = 0;
  if (weatherIcon === "01d" || weatherIcon === "01n") {
    number = 1;
  }
  if (weatherIcon === "02d" || weatherIcon === "02n") {
    number = 2;
  }
  if (weatherIcon === "03d" || weatherIcon === "03n") {
    number = 3;
  }
  if (weatherIcon === "04d" || weatherIcon === "04n") {
    number = 4;
  }
  if (weatherIcon === "09d" || weatherIcon === "09n") {
    number = 9;
  }
  if (weatherIcon === "10d" || weatherIcon === "10n") {
    number = 10;
  }
  if (weatherIcon === "11d" || weatherIcon === "11n") {
    number = 11;
  }
  if (weatherIcon === "13d" || weatherIcon === "13n") {
    number = 13;
  }
  if (weatherIcon === "50d" || weatherIcon === "50n") {
    number = 50;
  }
  iconId.classList.add("fa-solid", icons[number]);
}
function cityTemperature(responce) {
  changeCityTemperature(responce);
  changeWeatherCondition(responce);
  changeHumidity(responce);
  changeWind(responce);
  displayCurrentCity(responce);
  getforecast(responce.data.coord);
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
//Convert to Farenheit
function convertToFahrenheit(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temperature");
  let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperature.innerHTML = Math.round(fahrenheitTemperature);
  celsius.classList.add("active");
  fahrenheit.classList.remove("active");
}
function convertToCelsius(event) {
  event.preventDefault();
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = Math.round(celsiusTemperature);
  celsius.classList.remove("active");
  fahrenheit.classList.add("active");
}
function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return days[day];
}
function addIcon(weatherIcon) {
  let icons = [];
  icons[1] = "fa-sun";
  icons[3] = "fa-cloud";
  icons[2] = "fa-cloud";
  icons[4] = "fa-cloud";
  icons[9] = "fa-cloud-rain";
  icons[10] = "fa-cloud-rain";
  icons[11] = "fa-tornado";
  icons[13] = "fa-snow";
  icons[50] = "fa-smog";
  let number = 0;
  if (weatherIcon === "01d" || weatherIcon === "01n") {
    number = `<i class= "fa-sun icon fa-solid"></i>`;
  }
  if (weatherIcon === "02d" || weatherIcon === "02n") {
    number = `<i class= "fa-solid icon fa-cloud"></i>`;
  }
  if (weatherIcon === "03d" || weatherIcon === "03n") {
    number = `<i class= "fa-solid icon fa-cloud"></i>`;
  }
  if (weatherIcon === "04d" || weatherIcon === "04n") {
    number = `<i class= "fa-solid icon fa-cloud"></i>`;
  }
  if (weatherIcon === "09d" || weatherIcon === "09n") {
    number = `<i class= "fa-solid icon fa-cloud-rain"></i>`;
  }
  if (weatherIcon === "10d" || weatherIcon === "10n") {
    number = `<i class= "fa-solid icon fa-cloud-rain"></i>`;
  }
  if (weatherIcon === "11d" || weatherIcon === "11n") {
    number = `<i class= "fa-solid icon fa-tornado"></i>`;
  }
  if (weatherIcon === "13d" || weatherIcon === "13n") {
    number = `<i class= "fa-solid icon fa-snow"></i>`;
  }
  if (weatherIcon === "50d" || weatherIcon === "50n") {
    number = `<i class= "fa-solid icon fa-smog"></i>`;
  }
  return number;
}
function addDay(forecastDay) {
  let ForecastElement = document.querySelector("#forecast");
  forecastHTML =
    forecastHTML +
    `
          <div class="col-2 weekday"> ${addIcon(forecastDay.weather[0].icon)}
          
            <div class="temperature-days"><span class="min">${Math.round(
              forecastDay.main.temp_max
            )}°</span></div>
           
            <div class="day">${formatDay(forecastDay.dt)}</div>
          </div>`;

  ForecastElement.innerHTML = forecastHTML;
}
function displayForecast(response) {
  let forecast = response.data.list;

  let forecastHTML = '<div class="row days" >';
  let i = 0;
  for (i = 0; i <= 40; i = i + 7) {
    console.log(forecast[i]);
    addDay(forecast[i]);
  }
  forecastHTML = forecastHTML + `</div>`;
}

function getforecast(coordinates) {
  let apiKey = "35508be96ee4e5cd4520c32d236240eb";
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?units=metric&lon=${coordinates.lon}&lat=${coordinates.lat}&appid=${apiKey}`;
  axios.get(apiUrl).then(displayForecast);
  console.log(apiUrl);
}
let celsiusTemperature = null;
let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", convertToFahrenheit);
let celsius = document.querySelector("#celsius");
celsius.addEventListener("click", convertToCelsius);
let forecastHTML = '<div class="row days" >';
