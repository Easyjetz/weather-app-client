import React from "react";
import { useSelector } from "react-redux";
import { CardSelectors } from "../../store/WeatherCard";

export function WeatherCommonInfo(props) {
  const { name, main, weather, wind } = useSelector(CardSelectors.weatherInfo);
  const KELVIN = -273.15;

  const temperature = Math.round(main.temp + KELVIN);

  const forecast = useSelector(CardSelectors.forecast);
  const forecastRequest = useSelector(CardSelectors.forecastRequest);

  if (forecastRequest === "success") {
    console.log(forecast);
  }
  return (
    <div className="infoWrapper">
      <div className="cityName">{name}</div>
      <div className="temperatureBlock">
        <div className="temperature">
          {temperature} <span>&#176;</span>
        </div>
        <div className="weatherKind">{weather.main}</div>
      </div>
      <div className="commonInfo">
        <div className="humidityBlock">
          <div>humidity</div>
          <div>{main.humidity} %</div>
        </div>
        <div className="windSpeedBlock">
          <div>wind</div>
          <div>{wind.speed} м/c</div>
        </div>
      </div>
    </div>
  );
}
