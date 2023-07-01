import React from "react";
import TargetDate from "./TargetDate";
import CurrentTemperature from "./CurrentTemperature";

export default function WeatherInfo(props) {
  return (
    <span>
      <div className="col-12 md-6 mt-2">
        <h2>Displaying Weather For</h2>
        <h2 className="display-1">{props.data.city}</h2>
        <div className="row mb-3">
          <div className="col">
            <h6 className="date">
              <TargetDate date={props.data.date} />
            </h6>
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-6 col-md-3">
          <h4>Currently:</h4>
          <CurrentTemperature celcius={props.data.temperature} />
          <ul className="list-unstyled substats">
            <li>Wind Speed: {props.data.wind}km/hr</li>
            <li>Humidity: {props.data.humidity}%</li>
          </ul>{" "}
        </div>
        <div className="col-6 col-md-3">
          <img
            src={props.data.imgUrl}
            alt="{props.data.description}"
            className="d-flex"
          />
        </div>
        <div className="col-12 col-md-6">
          <h4>Today's Forecast</h4>
          <div className="row">
            <div className="col-6 mx-auto">
              <h4>Min</h4>
              <h2 className="display-2">
                <span id="todays-min">{props.info.minTemperature}</span>
                <span id="todays-units-min">°C</span>
              </h2>
            </div>
            <div className="col-6 mx-auto">
              <h4>Max</h4>
              <h2 className="display-2">
                <span id="todays-max">{props.info.maxTemperature}</span>
                <span id="todays-units-max">°C</span>
              </h2>
            </div>
            <div className="row">
              <div className="col">
                <p id="description">{props.data.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </span>
  );
}
