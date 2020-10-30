import React from "react";
import { weatherIcons } from "../../icons";
import { DayOfWeek, ForecastImage, ForecastItem, ForecastMain, ForecastTemp, ImageWrapper, Span } from "./ForecastElements";


export function ForecastDay({ name, weather, main }) {
  return (
    <ForecastItem>
      <DayOfWeek>{name}</DayOfWeek>
      <ImageWrapper>
        <ForecastImage
          src={weatherIcons[weather.icon]}
        />
      </ImageWrapper>
      <ForecastTemp>
        {main.temp} <Span>&#176; C</Span>
      </ForecastTemp>
      <ForecastMain>{weather.main}</ForecastMain>
    </ForecastItem>
  );
}
