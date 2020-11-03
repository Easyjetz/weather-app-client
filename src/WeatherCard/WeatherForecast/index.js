import React from "react";
import { useSelector } from "react-redux";
import { CardSelectors } from "../../store/WeatherCard";
import { ForecastDay } from "./ForecastDay";
import { ForecastContainer } from './ForecastElements';



export function WeatherForecast() {
  const forecast = useSelector(CardSelectors.forecast);

  const forecastElements = forecast.map(day => {
    const { dayOfWeek, weather, temp, windSpeed } = day;
    return <ForecastDay dayOfWeek={dayOfWeek}
      weather={weather}
      temp={temp}
      windSpeed={windSpeed} />
  });

  return (
    <ForecastContainer>
      {forecastElements}
    </ForecastContainer>
  );
}
