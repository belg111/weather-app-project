import React, { useState } from "react";
import axios from "axios";
import "./SearchEngine.css";

export default function SearchEngine() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState(null);

  function showWeather(response) {
    //console.log(response.data);
    //setTemperature(Math.round(response.data.main.temp));
    setLoaded(true);
    setWeather({
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=15b6ba0523386a8a73b38b2440a74dea&units=metric`;
    //console.log(url);
    axios.get(url).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a city" onChange={updateCity} />
      <input type="submit" value="Search" />
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <p>
          Current observations for <strong>{city}</strong>
        </p>
        <ul className="observations">
          <li className="results">Temperature: {weather.temperature}°C</li>
          <li className="results">Humidity: {weather.humidity}%</li>
          <li className="results">Wind Speed: {weather.wind}km/hr</li>
          <li className="results">Description: {weather.description}</li>
          <li className="results">
            <img src={weather.icon} alt="Weather Icon" />
          </li>
        </ul>
      </div>
    );
  } else {
    return <div>{form}</div>;
  }
}
