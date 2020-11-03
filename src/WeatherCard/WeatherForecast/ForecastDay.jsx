import React from "react";
import { weatherIcons } from "../../icons";
import {ForecastImage, ForecastItem, ForecastMain} from "./ForecastElements";


export function ForecastDay({ dayOfWeek, weather, temp }) {
  return (
    <ForecastItem>
      <div className='city'>{dayOfWeek}</div>
      <div className='imageBlock'>
        <ForecastImage
          src={weatherIcons[weather.icon]}
        />
      </div>
      <div className='tempBlock'>
        {temp} <span>&#176; C</span>
      </div>
      <ForecastMain>{weather.weatherType}</ForecastMain>
    </ForecastItem>
  );
}
