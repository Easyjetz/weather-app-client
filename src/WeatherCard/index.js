import React from "react";
import { useSelector } from "react-redux";
import { useActions } from "../store";
import { CardActions, CardSelectors } from "../store/WeatherCard";
import { WeatherCommonInfo } from "./WeatherCommonInfo";
import { WeatherForecast } from "./WeatherForecast";
import { Search } from "./Search";
import { CardWrapper, WeatherWrapper } from "./WrapElements";


export function WeatherCard() {

    const { geoRequestSuccess, geolocationFetchWeather } = useActions(CardActions);

    const isAllowedGeo = useSelector(CardSelectors.isAllowedGeo);
    const position = useSelector(CardSelectors.position);

    const weatherRequest = useSelector(CardSelectors.weatherRequest);
    const forecastRequest = useSelector(CardSelectors.forecastRequest);

    if (!isAllowedGeo) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const allowedGeo = true;
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                return geoRequestSuccess({ allowedGeo, latitude, longitude });
            });
        }
    } else {
        const { latitude, longitude } = position;
        // отредактировать запрос + у меня нету такого же запроса на прогноз погоды.
        switch (weatherRequest) {
            case false:
                geolocationFetchWeather(latitude, longitude);
            case true:
                console.log('выполняется запрос')
        }
    }



    return <WeatherWrapper>
        <Search />

        {weatherRequest === 'success' ? <WeatherCommonInfo /> : ''}
        {forecastRequest === 'success' ? <WeatherForecast /> : ''}
    </WeatherWrapper>
}