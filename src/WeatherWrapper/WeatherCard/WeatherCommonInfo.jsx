import React from "react";

export function WeatherCommonInfo(props) {
  return (
    <div className="infoWrapper">
      <div className="cityName">Yekaterinburg</div>
      <div className="temperatureBlock">
        <div className="temperature">12</div>
        <div className="weatherKind">cloudly</div>
      </div>
      <div className="commonInfo">
        <div className="humidityBlock">
          <div>humidity</div>
          <div>n %</div>
        </div>
        <div className="windSpeedBlock">
          <div>wind</div>
          <div>n %</div>
        </div>
      </div>
    </div>
  );
}
