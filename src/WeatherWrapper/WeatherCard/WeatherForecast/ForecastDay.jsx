import React from "react";
import { weatherIcons } from "../../../icons";

import style from "./ForecastDay.module.css";

export function ForecastDay({ name, weather, main }) {
  return (
    <div className="dayForecastWrap">
      <div className="dayOfWeek">{name}</div>
      <div className="weatherIcon">
        <img src={weatherIcons[weather.icon]} alt="" />
      </div>
      <div className="temperature">
        {main.temp} <span>&#176;</span>
      </div>
      <div>{weather.main}</div>
    </div>
  );
}
