import React from "react";
import { useSelector } from "react-redux";
import { weatherIcons } from "../icons";
import { CardSelectors } from "../store/WeatherCard";

import nt_clear from "../icons/nt_clear.png";
import fewCloudsN from "../icons/nt_partlycloudy.png";
import { InfoGeo, InfoHumidity, InfoMain, InfoTemp, InfoWind, InfoWrapper } from "./WrapElements";

export function WeatherCommonInfo() {
  const { cityName, temp, weather, wind, country, humidity } = useSelector(
    CardSelectors.weatherInfo
  );
  const KELVIN = -273.15;
  const temperature = Math.round(temp + KELVIN);

  const Icons = Object.assign({}, weatherIcons);
  Icons["01n"] = nt_clear;
  Icons["02n"] = fewCloudsN;

  return (
    <InfoWrapper>
      <div className='InfoBlock'>
        <InfoGeo>
          {cityName}, {country}
        </InfoGeo>
        <InfoTemp>
          {temperature} <span>&#176; C</span>
        </InfoTemp>
        <InfoMain>{weather.main}</InfoMain>
        <div className='imgBlock'>
          <img src={Icons[weather.icon]} alt='icon' />
        </div>
      <InfoHumidity>Humidity: {humidity} %</InfoHumidity>
      <InfoWind>Wind: {wind.speed} м/c</InfoWind>
      </div>
    </InfoWrapper>
  );
}
