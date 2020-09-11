import React from "react";
import { useSelector } from "react-redux";
import { CardSelectors, CardActions } from "../../store/WeatherCard";
import { useActions } from "../../store";

export function SearchButton(props) {
  const inputValue = useSelector(CardSelectors.inputValue);
  const { cityFetchWeather } = useActions(CardActions);

  function onCityRequest() {
    cityFetchWeather(inputValue);
  }

  return <button onClick={onCityRequest}>Search</button>;
}
