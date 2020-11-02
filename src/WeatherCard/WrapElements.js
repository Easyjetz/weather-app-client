import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import bg from '../image/bg.jpg';

export const GlobalStyle = createGlobalStyle`
    body {
        background-image: url(${bg});
        background-repeat: no-repeat;
        background-size: cover;
    }
    * {
        box-sizing: border-box;
    }
`;

export const Container = styled.div`
    max-width: 1170px;
    margin: 0 auto;
    padding: 0 15px;
`;

export const WeatherWrapper = styled.div``;


// export const CardWrapper = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;
// `;


export const InfoWrapper = styled.div`
    color: #fff;
    font-family: 'Open Sans', sans-serif;
    text-align: center;
    padding: 30px 0;
    font-weight: 300;
    @media(max-width: 900px) {

    }
`;

export const InfoBlock = styled.div``;

export const InfoGeo = styled.p`
    font-size: 28px;
    @media(max-width: 900px) {
        font-size: 22px;
    }
`;
export const InfoTemp = styled.p`
    font-size: 48px;
    padding: 10px 0;
    @media(max-width: 900px) {
        font-size: 30px;
    }
`;
export const InfoMain = styled.p`
    font-size: 22px;
    @media(max-width: 900px) {
        font-size: 18px;
    }
`;

export const ImgBlock = styled.div``;
export const Img = styled.img``;


export const InfoHumidity = styled.span`
        padding-right: 20px;
`;
export const InfoWind = styled.span`
        padding-left: 20px;
`;