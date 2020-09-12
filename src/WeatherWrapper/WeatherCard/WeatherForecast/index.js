import React from "react";
import { useSelector } from "react-redux";
import { CardSelectors } from "../../../store/WeatherCard";
import { ForecastDay } from "./ForecastDay";



export function WeatherForecast() {
  const forecast = useSelector(CardSelectors.forecast);

  const forecastElements = forecast.map(day => {
    const { name, weather, main, windSpeed } = day;
    return <ForecastDay name={name}
      weather={weather}
      main={main}
      windSpeed={windSpeed} />
  });

  return (
    <div className="forecastInfo">
      <div className="forecastDays">
        {forecastElements}
      </div>
    </div>
  );
}
