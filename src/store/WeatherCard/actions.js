import * as types from './types';

const axios = require('axios');

export const geoRequestSucceeded = value => ({ type: types.GEO_REQUEST_SUCCEEDED, payload: value });

export const searchInputChange = value => ({ type: types.CHANGE_SEARCH_INPUT, payload: value });

export const weatherRequest = () => ({ type: types.WEATHER_REQUEST });
export const forecastRequest = () => ({ type: types.FORECAST_REQUEST });

export const weatherRequestFailed = value => ({ type: types.WEATHER_REQUEST_FAILED, payload: value });
export const forecastRequestFailed = value => ({ type: types.FORECAST_REQUEST_FAILED, payload: value });

export const receivedWeatherInfo = data => {
    return { type: types.RECEIVED_WEATHER_INFO, payload: { ...data } }
}
export const receivedForecastInfo = data => {
    return { type: types.RECEIVED_FORECAST_INFO, payload: { ...data } }
}


export function cityFetchWeather(city) {
    const API_KEY = 'b8c2cd9097a14c0f326a82678b521b25';
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    const forecastWeatherUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`

    return dispatch => {
        dispatch(weatherRequest);
        axios.get(currentWeatherUrl).then(res => dispatch(receivedWeatherInfo(res.data)))
            .catch(err => dispatch(weatherRequestFailed(err)));

        dispatch(forecastRequest());
        axios.get(forecastWeatherUrl).then(res => dispatch(receivedForecastInfo(res.data)))
            .catch(err => dispatch(forecastRequestFailed(err)));
    }

}

export function geolocationFetchWeather(lat, lon) {
    const API_KEY = 'b8c2cd9097a14c0f326a82678b521b25';
    const geoWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    const forecastWeatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    return dispatch => {
        dispatch(weatherRequest());
        axios(geoWeatherUrl).then(res => dispatch(receivedWeatherInfo(res.data)))
            .catch(err => dispatch(weatherRequestFailed(err)));


        dispatch(forecastRequest());
        axios(forecastWeatherUrl).then(res => dispatch(receivedForecastInfo(res.data)))
            .catch(err => dispatch(forecastRequestFailed(err)));
    }
}