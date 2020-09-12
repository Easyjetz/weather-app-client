import React from 'react';
import './index.css'

import { WeatherCard } from './WeatherCard';
import { Search } from './Search';

import { useActions } from '../store';
import { WrapActions, WrapSelectors } from '../store/WeatherWrap';
import { useSelector } from 'react-redux';




export function WeatherWrapper(props) {

    const { geoRequestSuccess } = useActions(WrapActions);

    const isAllowedGeo = useSelector(WrapSelectors.isAllowedGeo);
    const position = useSelector(WrapSelectors.position);

    if (!isAllowedGeo) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const isAllowedGeo = true;
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                return geoRequestSuccess({ isAllowedGeo, latitude, longitude });
            });
        }
    }





    return (
        <div className='weatherWrapper'>
            <Search />
            {isAllowedGeo ? <WeatherCard position={position} /> : ''}
        </div>
    )
}