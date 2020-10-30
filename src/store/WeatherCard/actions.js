import * as types from './types';

export const geoRequestSuccess = value => ({ type: types.GEO_REQUEST_SUCCESS, payload: value });

export const searchInputChange = (value) => ({ type: types.CHANGE_SEARCH_INPUT, payload: value });

export const fetchWeatherRequest = () => ({ type: types.FETCH_WEATHER_REQUEST });
export const fetchForecastRequest = () => ({ type: types.FETCH_FORECAST_REQUEST });


export const receiveWeatherInfo = data => {
    return { type: types.RECEIVE_WEATHER_INFO, payload: { ...data } }
}

export const receiveForecastInfo = data => {
    return { type: types.RECEIVE_FORECAST_INFO, payload: { ...data } }
}

// повторяются запросы

export function cityFetchWeather(city) {
    const API_KEY = 'b8c2cd9097a14c0f326a82678b521b25';
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    const forecastWeatherUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`

    return dispatch => {
        dispatch(fetchWeatherRequest);
        fetch(currentWeatherUrl)
            .then(response => response.json()).then(data => dispatch(receiveWeatherInfo(data)))
            .catch(err => console.log(err));

        dispatch(fetchForecastRequest());
        fetch(forecastWeatherUrl)
            .then(response => response.json()).then(data => dispatch(receiveForecastInfo(data)))
            .catch(err => console.log(err));
    }

}

export function geolocationFetchWeather(lat, lon) {
    const API_KEY = 'b8c2cd9097a14c0f326a82678b521b25';
    const geoWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    const forecastWeatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    return dispatch => {
        dispatch(fetchWeatherRequest());
        fetch(geoWeatherUrl)
            .then(response => response.json()).then(data => dispatch(receiveWeatherInfo(data)))
            .catch(err => {
                console.log(err);
            });


        dispatch(fetchForecastRequest());
        fetch(forecastWeatherUrl)
            .then(response => response.json()).then(data => dispatch(receiveForecastInfo(data)))
            .catch(err => console.log(err));
    }
}