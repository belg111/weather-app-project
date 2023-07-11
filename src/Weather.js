import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import FiveDayForecast from "./FiveDayForecast";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ loaded: false });
  const [todayForecast, setTodayForecast] = useState("");
  const [forecast, setForecast] = useState([]);

  function showWeather(response) {
    //console.log(response.data);
    if (response.data.status !== `not_found`) {
      setWeather({
        loaded: true,
        city: response.data.city,
        country: response.data.country,
        coord: response.data.coordinates,
        temperature: Math.round(response.data.temperature.current),
        date: new Date(response.data.time * 1000),
        wind: response.data.wind.speed,
        humidity: response.data.temperature.humidity,
        description: response.data.condition.description,
        imgUrl: response.data.condition.icon_url,
      });
    } else {
      return null;
    }
  }
  function showForecast(response) {
    if (response.data.status !== `not_found`) {
      setForecast(response.data.daily);
      //let todayForecast = response.data.daily;
      setTodayForecast({
        minTemperature: Math.round(response.data.daily[0].temperature.minimum),
        maxTemperature: Math.round(response.data.daily[0].temperature.maximum),
        //imgUrl: response.data.daily[0].condition.icon_url,
        //date: new Date(response.data.daily[0].time * 1000),
        //  wind: response.data.wind.speed,
        // humidity: response.data.main.humidity,
        // description: response.data.weather[0].description,
      });
    } else {
      alert(
        "Sorry , we couldn't find that location. Please check the location name and try again."
      );
    }
  }

  function citySearch() {
    let key = "a4c0530a1o900180f030t11ff9bb416d";
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=metric`;
    //console.log(url);
    axios.get(url).then(showWeather);
    fetchForecast();
  }

  function fetchForecast() {
    let apiKey = "a4c0530a1o900180f030t11ff9bb416d";
    let apiUrlEndpoint = "https://api.shecodes.io/weather/v1/forecast";
    let apiURL = `${apiUrlEndpoint}?query=${city}&key=${apiKey}&units=metric`;
    //console.log(apiURL);
    axios.get(apiURL).then(showForecast);
  }
  function handleSubmit(event) {
    event.preventDefault();
    citySearch();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weather.loaded) {
    return (
      <div className="container">
        <div className="row justify-content-center mb-1 px-1">
          <div className="col">
            <h4>What's The Weather Like In...</h4>
            <form onSubmit={handleSubmit}>
              <input
                type="search"
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
              </div>
            </form>
          </div>
          <WeatherInfo data={weather} info={todayForecast} />
          <div className="app-bottom-container">
            <div className="row mb-2">
              <div className="col">
                <h3>Next 5 Days</h3>
              </div>
            </div>
            <div className="row g-2 justify-content-center">
              {forecast.map(function (dailyForecast, index) {
                if (index > 0 && index < 6) {
                  return (
                    <div className="col" key={index}>
                      <FiveDayForecast info={dailyForecast} />
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    citySearch();
    return (
      <div className="container">
        <div className="row justify-content-left">
          <div className="col-12 col-md-6">
            <h4>Loading... Please Wait</h4>
          </div>
        </div>
      </div>
    );
  }
}
