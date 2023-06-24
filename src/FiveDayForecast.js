import React from "react";
import StormImage from "./images/icons-storm-200px.png";
import "./Fivedayforecast.css";

export default function FiveDayForecast() {
  return (
    <div className="app-bottom-container">
      <div className="row mb-2">
        <div className="col">
          <h3>Next 5 Days</h3>
        </div>
      </div>
      <div className="row g-2 justify-content-center">
        <div class="col">
          <div class="card text-center five-day-cards">
            <div class="card-body">
              <h5>Mon</h5>
            </div>
            <img
              src={StormImage}
              alt=""
              class="card-img-center img-fluid five-day-icons"
            />
            <div class="card-body">
              <h5>
                23°C / <strong>35°C</strong>
              </h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card text-center five-day-cards">
            <div class="card-body">
              <h5>Tue</h5>
            </div>
            <img
              src={StormImage}
              alt=""
              class="card-img-center img-fluid five-day-icons"
            />
            <div class="card-body">
              <h5>
                23°C / <strong>35°C</strong>
              </h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card text-center five-day-cards">
            <div class="card-body">
              <h5>Wed</h5>
            </div>
            <img
              src={StormImage}
              alt=""
              class="card-img-center img-fluid five-day-icons"
            />
            <div class="card-body">
              <h5>
                23°C / <strong>35°C</strong>
              </h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card text-center five-day-cards">
            <div class="card-body">
              <h5>Thu</h5>
            </div>
            <img
              src={StormImage}
              alt=""
              class="card-img-center img-fluid five-day-icons"
            />
            <div class="card-body">
              <h5>
                23°C / <strong>35°C</strong>
              </h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card text-center five-day-cards">
            <div class="card-body">
              <h5>Fri</h5>
            </div>
            <img
              src={StormImage}
              alt=""
              class="card-img-center img-fluid five-day-icons"
            />
            <div class="card-body">
              <h5>
                23°C / <strong>35°C</strong>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
