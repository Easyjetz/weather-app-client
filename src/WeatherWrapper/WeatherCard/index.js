import React from "react";
import './index.css';
import { WeatherCommonInfo } from "./WeatherCommonInfo";
import { useSelector } from "react-redux";
import { useActions } from "../../store";
import { CardActions, CardSelectors } from "../../store/WeatherCard";


export function WeatherCard({ position }) {
    const { geolocationFetchWeather } = useActions(CardActions);
    const { latitude, longitude } = position;

    const weatherRequest = useSelector(CardSelectors.weatherRequest);

    switch (weatherRequest) {
        case false:
            geolocationFetchWeather(latitude, longitude);
        case true:
            console.log('выполняется запрос')
    }


    return <div className='cardWrapper'>
        {weatherRequest === 'success' ? <WeatherCommonInfo /> : ''}
    </div>
}