import React from "react";
import './index.css';
import { WeatherCommonInfo } from "./WeatherCommonInfo";

export function WeatherCard(props) {
    return <div className='cardWrapper'>
        <WeatherCommonInfo />
    </div>
}