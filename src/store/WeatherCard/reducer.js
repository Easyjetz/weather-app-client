
import { getForecast } from '../../utilits/getForecast';
import * as types from './types';

const initialState = {
    geoRequest: false,
    position: {},
    weatherRequest: false,
    forecastRequest: false,
    weatherInfo: {},
    inputValue: '',
    forecast: [],
    weatherRequestError: null,
    forecastRequestError: null,
};


export function reducer(state = initialState, action) {
    switch (action.type) {
        case types.GEO_REQUEST_SUCCEEDED:
            return {
                ...state,
                geoRequest: action.payload.geoRequest,
                position: {
                    latitude: action.payload.latitude,
                    longitude: action.payload.longitude,
                }
            }
        case types.CHANGE_SEARCH_INPUT:
            return { ...state, inputValue: action.payload };


        case types.WEATHER_REQUEST:
            return { ...state, weatherRequest: true }

        case types.FORECAST_REQUEST:
            return { ...state, forecastRequest: true }

        case types.WEATHER_REQUEST_FAILED:
            console.log(`Ошибка прошла! ${action.payload}`);
            return { ...state, weatherRequest: 'failed', weatherRequestError: action.payload.response.data }

        case types.FORECAST_REQUEST_FAILED:
            console.log(`Ошибка прошла! ${action.payload}`);
            return { ...state, forecastRequest: 'failed', forecastRequestError: action.payload.response.data }

        case types.RECEIVED_WEATHER_INFO:
            const weather = {};
            console.log(action.payload);
            action.payload.weather.map(el => {
                weather.weatherType = el.main;
                weather.icon = el.icon;
                weather.description = el.description;
            });

            return {
                ...state,
                weatherInfo: {
                    cityName: action.payload.name,
                    temp: action.payload.main.temp,
                    weather: weather,
                    wind: action.payload.wind,
                    humidity: action.payload.main.humidity,
                    country: action.payload.sys.country,
                },
                weatherRequest: 'success'
            }

        case types.RECEIVED_FORECAST_INFO:

            console.log(action.payload);

            const forecastData = action.payload.list
            const forecastDays = getForecast(forecastData);
            console.log(forecastData)

            return {
                ...state,
                forecast: forecastDays,
                forecastRequest: 'success'
            }

        default:
            return state;
    }

}