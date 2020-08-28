const { createStore } = require("redux");
const { WeatherReducer } = require("./WeatherCard");

export const store = createStore(WeatherReducer);