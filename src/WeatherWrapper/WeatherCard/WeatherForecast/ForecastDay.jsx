import React from "react";
import { FaSnowflake, FaCloud } from "react-icons/fa";

export function ForecastDay({ name, weather, main }) {
  let Icon = null;
  let weatherStatus = null;
  switch (name) {
    case "Clouds":
      Icon = <FaCloud />;
      weatherStatus = "cloudy";

    case "Snow":
  }

  return (
    <div className="dayForecastWrap">
      <div className="dayOfWeek">{name}</div>
      <div className="weatherIcon">
        <FaSnowflake color="#adb5bd" />
      </div>
      <div className="temperature">{main.temp}</div>
      <div>{weather.main}</div>
    </div>
  );
}
