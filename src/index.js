<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Weather</title>
    <link rel="stylesheet" href="src/styles.css" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <script
      src="https://kit.fontawesome.com/3430b3bb34.js"
      crossorigin="anonymous"
    ></script>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap"
      rel="stylesheet"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Cookie&family=Dancing+Script&display=swap"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js"></script>
  </head>
  <body>
    <div class="container">
      <div class="sector-1">
        <div class="row">
          <div class="col-10">
            <form id="search-form">
              <input
                type="text"
                class="city"
                placeholder="Enter the city:"
                id="search-city"
              />
              <input type="submit" value="Search" class="search" />
            </form>
          </div>
          <div class="col-2">
            <form id="current">
              <input type="submit" value="Current" class="current" />
            </form>
          </div>
        </div>
      </div>
      <div class="sector-2">
        <div class="row">
          <div class="col-3">
            <i
              class="fa-solid fa-temperature-three-quarters snow weather-icon"
              id="weather-icon"
            ></i>
          </div>
          <div class="col-5 general">
            <div class="temperature">
              <span id="temperature"> -1 </span
              ><a href="#"> <span id="celsius">°C</span> </a> |
              <a href="#"> <span id="fahrenheit">°F </span> </a>
            </div>
            <div class="location" id="city">Kyiv</div>
            <div class="date" id="date">Sun, Feb 05</div>
            <div class="weather" id="description">Cloudy</div>
          </div>
          <div class="col-3 prec-wind">
            <div class="precipitation">
              Humidity: <span id="humidity">76</span>%
            </div>
            <div class="wind">Wind: <span id="wind-speed">14</span>km/h</div>
          </div>
        </div>
      </div>
      <div class="sector-3">
        <div id="forecast">
          </div>
        </div>
      </div>
