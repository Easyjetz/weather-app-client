import React from 'react';
import './index.css'
import { WeatherCard } from './WeatherCard';
import { Search } from './Search';


export function WeatherWrapper(props) {
    return (
        <div className='weatherWrapper'>
            <Search />
            <WeatherCard />
        </div>
    )
}