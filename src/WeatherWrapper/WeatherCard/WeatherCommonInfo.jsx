import React from "react";
import { useSelector } from "react-redux";
import { weatherIcons } from "../../icons";
import { CardSelectors } from "../../store/WeatherCard";

import nt_clear from "../../icons/nt_clear.png";
import fewCloudsN from "../../icons/nt_partlycloudy.png";

export function WeatherCommonInfo(props) {
  const { name, main, weather, wind } = useSelector(CardSelectors.weatherInfo);
  const KELVIN = -273.15;
  const temperature = Math.round(main.temp + KELVIN);

  const Icons = Object.assign({}, weatherIcons);
  Icons["01n"] = nt_clear;
  Icons["02n"] = fewCloudsN;

  return (
    <div className="infoWrapper">
      <div className="cityName">{name}</div>
      <div className="temperatureBlock">
        <div className="temperature">
          {temperature} <span>&#176;</span>
        </div>
        <div className="weatherKind">{weather.main}</div>
      </div>
      <div className="weatherIcon">
        <img src={Icons[weather.icon]} alt="" />
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
