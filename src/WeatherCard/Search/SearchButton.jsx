import React from "react";
import { useSelector } from "react-redux";
import { CardSelectors, CardActions } from "../../store/WeatherCard";
import { useActions } from "../../store";
import { StyledSearchButton } from "./SearchElements";


export function SearchButton() {
  const inputValue = useSelector(CardSelectors.inputValue);
  const { cityFetchWeather } = useActions(CardActions);

  function onCityRequest() {
    cityFetchWeather(inputValue);
  }

  return (
    <StyledSearchButton onClick={onCityRequest}>
      Поиск
    </StyledSearchButton>
  );
}
