import React from "react";
import Weather from "./Weather";
import FiveDayForecast from "./FiveDayForecast";
import Footer from "./Footer";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="appContainer">
        <Weather />
        <FiveDayForecast />
        <Footer />
      </div>
    </div>
  );
}
