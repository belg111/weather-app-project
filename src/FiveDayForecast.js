import React from "react";
import "./Fivedayforecast.css";

export default function FiveDayForecast(props) {
  function dayName() {
    let dayDate = new Date(props.info.time * 1000);
    let dayName = dayDate.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[dayName];
  }

  function minTemp() {
    let temperature = Math.round(props.info.temperature.minimum);
    return `${temperature}`;
  }

  function maxTemp() {
    let temperature = Math.round(props.info.temperature.maximum);
    return `${temperature}`;
  }

  return (
    <div className="app-bottom-container">
      <div className="row mb-2">
        <div className="col">
          <h3>Next 5 Days</h3>
        </div>
      </div>
      <div className="row g-2 justify-content-center">
        <div className="col">
          <div className="card text-center five-day-cards">
            <div className="card-body">
              <h5>{dayName()}</h5>
            </div>
            <img
              src={props.info.condition.icon_url}
              alt=""
              className="card-img-center img-fluid five-day-icons"
            />
            <div className="card-body">
              <h5>
                {minTemp()}°C / <strong>{maxTemp()}°C</strong>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
