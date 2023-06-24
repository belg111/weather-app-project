import React from "react";
import "./Weather.css";

export default function Weather() {
  let WeatherData = {
    city: "Brisbane",
    date: "Sun 21 May 2023 15:14 GMT",
    description: "Mostly sunny",
    imgUrl:
      "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png",
    currentTemperature: 32,
    wind: 10,
    humidity: 47,
  };
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6">
            <h4>What's The Weather Like In...</h4>
            <form action="">
              <input
                type="text"
                className="form-control form-control-md mb-3"
                placeholder="Search for a city or town name"
                autoComplete="off"
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
              {WeatherData.currentTemperature}
              <span>°C</span>
            </h2>
            <ul className="list-inline substats">
              <li className="list-inline-item">
                Wind Speed: {WeatherData.wind}km/hr
              </li>
              <li className="list-inline-item">
                Humidity {WeatherData.humidity}%
              </li>
            </ul>{" "}
          </div>
          <div className="col-5 col-md-3">
            <img
              src={WeatherData.imgUrl}
              alt="{WeatherData.description}"
              className="d-flex mx-auto"
            />
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12 col-md-6 city-main">
          <h4>Displaying weather for:</h4>
          <h2 className="display-2">{WeatherData.city}</h2>
          <div className="row mb-3">
            <div className="col">
              <h6 className="date">
                Last updated:
                <span>{WeatherData.date}</span>
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
                <span id="todays-min">20</span>
                <span id="todays-units-min">°C</span>
              </h2>
            </div>
            <div className="col-6">
              <h4>Max</h4>
              <h2 className="display-2">
                <span id="todays-max">34</span>
                <span id="todays-units-max">°C</span>
              </h2>
            </div>
            <div className="row">
              <div className="col">
                <p id="description">{WeatherData.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
