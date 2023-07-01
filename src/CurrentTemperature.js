import React, { useState } from "react";

export default function CurrentTemperature(props) {
  const [unit, setUnit] = useState("celcius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  function fahrenheitConversion() {
    return (props.celcius * 9) / 5 + 32;
  }

  if (unit === "celcius") {
    return (
      <div className="currentTemp">
        <span className="display-2">{props.celcius}</span>
        <span className="h5 fw-bold">
          {" "}
          °C |{" "}
          <a href="/" onClick={showFahrenheit} class="text-decoration-none">
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="currentTemp">
        <span className="display-2">{Math.round(fahrenheitConversion())}</span>
        <span className="h5 fw-bold">
          {" "}
          <a href="/" onClick={showCelcius} class="text-decoration-none">
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
