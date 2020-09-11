import React from "react";
import { useActions } from "../../store";
import { CardActions, CardSelectors } from "../../store/WeatherCard";
import { useSelector } from "react-redux";

export function SearchInput(props) {
  const inputRef = React.createRef();
  const { searchInputChange, cityFetchWeather } = useActions(CardActions);
  const inputValue = useSelector(CardSelectors.inputValue);

  function onInputChange() {
    const value = inputRef.current.value;
    searchInputChange(value);
  }

  function onInputCityRequest(e) {
    if (e.key === "Enter") {
      cityFetchWeather(inputValue);
    }
  }

  return (
    <input
      type="text"
      onChange={onInputChange}
      onKeyPress={onInputCityRequest}
      ref={inputRef}
      placeholder="Search City"
    />
  );
}
