import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import bg from '../image/bg.jpg';

export const GlobalStyle = createGlobalStyle`
    body {
        background-image: url(${bg});
        background-repeat: no-repeat;
        background-size: cover
    }
`;

export const WeatherWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;


export const CardWrapper = styled.div`
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Open Sans', sans-serif;
`;


export const InfoWrapper = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 0;
`;

export const InfoBlock = styled.div``;

export const InfoGeo = styled.p`
    font-size: 28px;
    font-weight: 300;
`;
export const InfoTemp = styled.p`
    font-size: 48px;
    padding: 10px 0;
`;
export const InfoMain = styled.p`
    font-weight: 300;
    font-size: 22px;
`;

export const ImgBlock = styled.div``;
export const Img = styled.img``;

export const InfoFooter = styled.div`
    font-weight: 300;
    font-size: 18px;
    width: 250px;
    display: flex;
    justify-content: space-between;
`;

export const InfoHumidity = styled.div``;
export const InfoWind = styled.div``;