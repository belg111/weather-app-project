import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState("");
  const currDate = new Date().toLocaleDateString();
  const currTime = new Date().toLocaleTimeString();
  //let WeatherData = {
  // date: "Sun 21 May 2023 15:14 GMT",
  // description: "Mostly sunny",
  // imgUrl:
  //   "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png",
  // currentTemperature: 32,
  // wind: 10,
  // humidity: 47,
  // };

  function showWeather(response) {
    console.log(response.data);
    //setTemperature(Math.round(response.data.main.temp));
    setLoaded(true);
    setWeather({
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      imgUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
    });
  }
  function showForecast(response) {
    console.log(response.data);
    //let todayForecast = response.data.daily;
    setForecast({
      minTemperature: Math.round(response.data.daily[0].temperature.minimum),
      maxTemperature: Math.round(response.data.daily[0].temperature.maximum),
      //  wind: response.data.wind.speed,
      // humidity: response.data.main.humidity,
      // description: response.data.weather[0].description,
      // imgUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=15b6ba0523386a8a73b38b2440a74dea&units=metric`;
    //console.log(url);
    axios.get(url).then(showWeather);
    fetchForecast();

    function fetchForecast() {
      let apiKey = "a4c0530a1o900180f030t11ff9bb416d";
      let apiUrlEndpoint = "https://api.shecodes.io/weather/v1/forecast";
      let apiURL = `${apiUrlEndpoint}?query=${city}&key=${apiKey}&units=metric`;
      console.log(apiURL);
      axios.get(apiURL).then(showForecast);
    }
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (loaded) {
    return (
      <div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-6">
              <h4>What's The Weather Like In...</h4>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="form-control form-control-md mb-3"
                  placeholder="Search for a city or town name"
                  autoComplete="off"
                  onChange={updateCity}
                />
                <div className="d-grid gap-2 d-md-block">
                  <button
                    type="input"
                    className="btn btn-primary form-control me-md-2 px-5 mb-3"
                  >
                    Search
                  </button>
                  <button
                    type="input"
                    className="btn btn-primary form-control me-md-2 px-5 mb-3"
                  >
                    My Current Location
                  </button>
                </div>
              </form>
            </div>
            <div className="col-7 col-md-3">
              <h2>Currently</h2>
              <h2 className="display-1">
                {weather.temperature}
                <span>°C</span>
              </h2>
              <ul className="list-inline substats">
                <li className="list-inline-item">
                  Wind Speed: {weather.wind}km/hr
                </li>
                <li className="list-inline-item">
                  Humidity {weather.humidity}%
                </li>
              </ul>{" "}
            </div>
            <div className="col-5 col-md-3">
              <img
                src={weather.imgUrl}
                alt="{weather.description}"
                className="d-flex mx-auto"
              />
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 col-md-6 city-main">
            <h4>Displaying weather for:</h4>
            <h2 className="display-2">{city}</h2>
            <div className="row mb-3">
              <div className="col">
                <h6 className="date">
                  Last updated:
                  <span>
                    {currDate} {currTime}
                  </span>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 city-main">
            <h4>Today's Forecast</h4>
            <div className="row">
              <div className="col-6">
                <h4>Min</h4>
                <h2 className="display-2">
                  <span id="todays-min">{forecast.minTemperature}</span>
                  <span id="todays-units-min">°C</span>
                </h2>
              </div>
              <div className="col-6">
                <h4>Max</h4>
                <h2 className="display-2">
                  <span id="todays-max">{forecast.maxTemperature}</span>
                  <span id="todays-units-max">°C</span>
                </h2>
              </div>
              <div className="row">
                <div className="col">
                  <p id="description">{weather.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-6">
              <h4>What's The Weather Like In...</h4>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="form-control form-control-md mb-3"
                  placeholder="Search for a city or town name"
                  autoComplete="off"
                  onChange={updateCity}
                />
                <div className="d-grid gap-2 d-md-block">
                  <button
                    type="input"
                    className="btn btn-primary form-control me-md-2 px-5 mb-3"
                  >
                    Search
                  </button>
                  <button
                    type="input"
                    className="btn btn-primary form-control me-md-2 px-5 mb-3"
                  >
                    My Current Location
                  </button>
                </div>
              </form>
            </div>
            <div className="col-7 col-md-3">
              <h2>Currently</h2>
              <h2 className="display-1">
                -<span>°C</span>
              </h2>
              <ul className="list-inline substats">
                <li className="list-inline-item">Wind Speed: - km/hr</li>
                <li className="list-inline-item">Humidity -%</li>
              </ul>{" "}
            </div>
            <div className="col-5 col-md-3">
              <img src="" alt="" className="d-flex mx-auto" />
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 col-md-6 city-main">
            <h4>Displaying weather for:</h4>
            <h2 className="display-2">Nowhere</h2>
            <div className="row mb-3">
              <div className="col">
                <h6 className="date">
                  Last updated:
                  <span>-</span>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 city-main">
            <h4>Today's Forecast</h4>
            <div className="row">
              <div className="col-6">
                <h4>Min</h4>
                <h2 className="display-2">
                  <span id="todays-min">? 20</span>
                  <span id="todays-units-min">°C</span>
                </h2>
              </div>
              <div className="col-6">
                <h4>Max</h4>
                <h2 className="display-2">
                  <span id="todays-max">?</span>
                  <span id="todays-units-max">°C</span>
                </h2>
              </div>
              <div className="row">
                <div className="col">
                  <p id="description">
                    We'll update this when we know what you are looking for.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
