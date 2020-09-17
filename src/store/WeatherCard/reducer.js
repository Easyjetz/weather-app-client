
import * as types from './types';

const initialState = {
    weatherRequest: false,
    forecastRequest: false,
    weatherInfo: null,
    inputValue: '',
    forecast: []
};


export function reducer(state = initialState, action) {
    switch (action.type) {
        case types.CHANGE_SEARCH_INPUT:
            return { ...state, inputValue: action.payload };


        case types.FETCH_WEATHER_REQUEST:
            return { ...state, weatherRequest: true }

        case types.RECEIVE_WEATHER_INFO:
            const weather = {};

            action.payload.weather.map(el => {
                weather.main = el.main;
                weather.icon = el.icon;
                weather.description = el.description;
            });


            return {
                ...state,
                weatherInfo: {
                    name: action.payload.name,
                    main: action.payload.main,
                    weather: weather,
                    wind: action.payload.wind,
                },
                weatherRequest: 'success'
            }

        case types.RECEIVE_FORECAST_INFO:
            // не знаю где должна быть обработка данных

            console.log(action.payload);
            function getDayWeather(dayForecast, date) {
                const weather = {};
                const KELVIN = -273.15;

                dayForecast.weather.map((el) => {
                    weather.main = el.main;
                    weather.icon = el.icon;
                    weather.description = el.description;
                });

                return {
                    name: days[date],
                    weather: weather,
                    main: {
                        temp: Math.round(dayForecast.main.temp + KELVIN),
                    },
                };
            }
            const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            const todayNumberInWeek = new Date().getDay();
            const forecastData = action.payload.list;
            const forecast = {
                day1: {
                    name: "",
                    main: {},
                    wind: 0,
                },

                day2: {
                    name: "",
                    main: {},
                    wind: 0,
                },

                day3: {
                    name: "",
                    main: {},
                    wind: 0,
                },

                day4: {
                    name: "",
                    main: {},
                    wind: 0,
                },

                day5: {
                    name: "",
                    main: {},
                    wind: 0,
                },

            }


            for (let j = 0; j < forecastData.length; j++) {
                const date = new Date(forecastData[j].dt_txt).getDay();

                if (
                    (date === todayNumberInWeek + 1 ||
                        (todayNumberInWeek === 6 && date === 0)) &&
                    !forecast.day1.name
                ) {
                    const weather = getDayWeather(forecastData[j], date);
                    forecast.day1 = weather;
                } else if (
                    !!forecast.day1.name &&
                    !forecast.day2.name &&
                    days[date] !== forecast.day1.name
                ) {
                    const weather = getDayWeather(forecastData[j], date);
                    forecast.day2 = weather;
                } else if (
                    !!forecast.day2.name &&
                    !forecast.day3.name &&
                    days[date] !== forecast.day2.name
                ) {
                    const weather = getDayWeather(forecastData[j], date);
                    forecast.day3 = weather;
                } else if (
                    !!forecast.day3.name &&
                    !forecast.day4.name &&
                    days[date] !== forecast.day3.name
                ) {
                    const weather = getDayWeather(forecastData[j], date);
                    forecast.day4 = weather;
                } else if (
                    !!forecast.day4.name &&
                    !forecast.day5.name &&
                    days[date] !== forecast.day4.name
                ) {
                    const weather = getDayWeather(forecastData[j], date);
                    forecast.day5 = weather;
                }
            }

            const forecastArray = [];
            for (const [key, value] of Object.entries(forecast)) {
                forecastArray.push(value);
            }
            return {
                ...state,
                forecast: forecastArray,
                forecastRequest: 'success'
            }

        default:
            return state;
    }

}