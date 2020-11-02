import React from "react";
import { useSelector } from "react-redux";
import { weatherIcons } from "../icons";
import { CardSelectors } from "../store/WeatherCard";

import nt_clear from "../icons/nt_clear.png";
import fewCloudsN from "../icons/nt_partlycloudy.png";
import { Img, ImgBlock, InfoBlock, InfoFooter, InfoGeo, InfoHumidity, InfoMain, InfoTemp, InfoWind, InfoWrapper } from "./WrapElements";

export function WeatherCommonInfo() {
  const { name, main, weather, wind, country } = useSelector(
    CardSelectors.weatherInfo
  );
  const KELVIN = -273.15;
  const temperature = Math.round(main.temp + KELVIN);

  const Icons = Object.assign({}, weatherIcons);
  Icons["01n"] = nt_clear;
  Icons["02n"] = fewCloudsN;

  return (
    <InfoWrapper>
      <InfoBlock>
        <InfoGeo>
          {name}, {country}
        </InfoGeo>
        <InfoTemp>
          {temperature} <span>&#176; C</span>
        </InfoTemp>
        <InfoMain>{weather.main}</InfoMain>
        <ImgBlock>
        <Img src={Icons[weather.icon]} />
      </ImgBlock>
      <InfoHumidity>Humidity: {main.humidity} %</InfoHumidity>
      <InfoWind>Wind: {wind.speed} м/c</InfoWind>

      </InfoBlock>
    </InfoWrapper>
  );
}
