import React from "react";
import { useSelector } from "react-redux";
import { CardSelectors } from "../../../store/WeatherCard";



export function WeatherForecast() {
  const forecast = useSelector(CardSelectors.forecast);
  const forecastRequest = useSelector(CardSelectors.forecastRequest);

  if (forecastRequest === "success") {
    console.log(forecast);
  }
  return (
    <div className="forecastInfo">
      <div className="forecastDays"></div>
    </div>
  );
}
