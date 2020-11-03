import styled from 'styled-components';

export const ForecastContainer = styled.div`
    font-weight: 300;
    min-width: 800px;
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    font-size: 22px;
    text-align: center;
    padding-bottom: 40px;
    @media (max-width: 1000px) {
        min-width: 100%;
        font-size: 18px;
    }
    @media (max-width: 786px) {
        font-size: 16px;
    }
    @media (max-width: 600px) {
        font-size: 14px;
    }
`;

export const ForecastItem = styled.div`
    padding: 20px 0;
    text-align: center;
    transition: all .2s;
    min-width: 15%;
    color: #ffffff;
    font-family: 'Open Sans', sans-serif;
    :hover {
        background-color: rgba(31, 28, 28, .6 );
    }
    @media (max-width: 786px) {
        min-width: 20%;
        padding: 20px 0;
    }
    @media (max-width: 576px) {
        padding: 10px 0;
    }
    @media (max-width: 448px) {
        :hover {
            background: none;
        }
    }
`;

export const ForecastImage = styled.img`
    padding: 10px 0 6px;
`;

export const ForecastMain = styled.div`
    padding-top: 8px;
`;