import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { weatherIcons } from '../../icons';
import { CardSelectors } from '../../store/WeatherCard';


const ErrorMessageStyled = styled.div`
    text-align: center;
    color: #fff;
    font-size: 18px;
    margin-top: 10px;
    text-transform: capitalize;
    img {
        display: block;
        margin: 6px auto 0;
    }
`;


export function ErrorMessage() {

    const error = useSelector(CardSelectors.weatherRequestError);
    const { cod, message } = error;


    return <ErrorMessageStyled>
        {`${cod}: ${message}`}
        <img src={weatherIcons['unknown']} />
    </ErrorMessageStyled>
}
