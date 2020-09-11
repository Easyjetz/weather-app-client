
import * as types from './types';

const initialState = {
    weatherRequest: false,
    forecastRequest: false,
    weatherInfo: null,
    forecast: {
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
        inputValue: '',
    }
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
            function getDayWeather(dayForecast, date) {
                const weather = {};
                const KELVIN = -273.15;


                dayForecast.weather.map((el) => {
                    weather.main = el.main;
                    weather.description = el.description;
                });

                return {
                    name: days[date],
                    weather: weather,
                    main: {
                        temp: Math.round(dayForecast.main.temp + KELVIN),
                        humidity: dayForecast.main.humidity,
                    },
                    windSpeed: dayForecast.wind.speed,
                };
            }
            const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            const todayNumberInWeek = new Date().getDay();
            const forecastData = action.payload.list;

            console.log(forecastData);


            for (let j = 0; j < forecastData.length; j++) {
                const date = new Date(forecastData[j].dt_txt).getDay();
                if (
                    (date === todayNumberInWeek + 1 ||
                        (todayNumberInWeek === 6 && date === 0)) &&
                    !state.forecast.day1.name
                ) {
                    const weather = getDayWeather(forecastData[j], date);
                    state.forecast.day1 = weather;
                } else if (
                    !!state.forecast.day1.name &&
                    !state.forecast.day2.name &&
                    days[date] !== state.forecast.day1.name
                ) {
                    const weather = getDayWeather(forecastData[j], date);
                    state.forecast.day2 = weather;
                } else if (
                    !!state.forecast.day2.name &&
                    !state.forecast.day3.name &&
                    days[date] !== state.forecast.day2.name
                ) {
                    const weather = getDayWeather(forecastData[j], date);
                    state.forecast.day3 = weather;
                } else if (
                    !!state.forecast.day3.name &&
                    !state.forecast.day4.name &&
                    days[date] !== state.forecast.day3.name
                ) {
                    const weather = getDayWeather(forecastData[j], date);
                    state.forecast.day4 = weather;
                } else if (
                    !!state.forecast.day4.name &&
                    !state.forecast.day5.name &&
                    days[date] !== state.forecast.day4.name
                ) {
                    const weather = getDayWeather(forecastData[j], date);
                    state.forecast.day5 = weather;
                }
            }
            return {
                ...state,
                forecastRequest: 'success'
            }

        default:
            return state;
    }

}