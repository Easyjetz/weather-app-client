import React from "react";
import { useSelector } from "react-redux";
import { useActions } from "../store";
import { CardActions, CardSelectors } from "../store/WeatherCard";
import { WeatherCommonInfo } from "./WeatherCommonInfo";
import { WeatherForecast } from "./WeatherForecast";
import { Search } from "./Search";


export function WeatherCard() {

    const { geoRequestSucceeded, geolocationFetchWeather } = useActions(CardActions);

    const geoRequest = useSelector(CardSelectors.geoRequest);
    const position = useSelector(CardSelectors.position);

    const weatherRequest = useSelector(CardSelectors.weatherRequest);
    const forecastRequest = useSelector(CardSelectors.forecastRequest);

    if (!geoRequest) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const geoRequest = true;
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                return geoRequestSucceeded({ geoRequest, latitude, longitude });
            });
        }
    } else {
        const { latitude, longitude } = position;
        // отредактировать запрос + у меня нету такого же запроса на прогноз погоды.

        if (!weatherRequest) {
            geolocationFetchWeather(latitude, longitude);
        }
    }



    return <div className='WeatherWrapper'>
        <Search />
        {weatherRequest === 'failed' ? '' : ''}
        {weatherRequest === 'success' ? <WeatherCommonInfo /> : ''}
        {forecastRequest === 'success' ? <WeatherForecast /> : ''}
    </div>
}