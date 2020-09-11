import { WrapReducer } from "./WeatherWrap";
import { CardReducer } from "./WeatherCard";
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
const { createStore, combineReducers, applyMiddleware } = require("redux");


const rootReducer = combineReducers({ WrapReducer: WrapReducer, CardReducer: CardReducer });

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
