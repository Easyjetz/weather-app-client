import styled from 'styled-components';

export const ForecastContainer = styled.div`
    font-weight: 300;
    width: 800px;
    display: flex;
    justify-content: space-around;
    font-size: 22px;
    text-align: center;
`;

export const ForecastItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 140px;
    height: 170px;
    transition: all .2s;
    :hover {
        background-color: rgba(31, 28, 28, .6 );
    }
`;

export const DayOfWeek = styled.div``;
export const ImageWrapper = styled.div``;
export const ForecastImage = styled.img`
    padding: 10px 0 6px;
`;

export const ForecastTemp = styled.div``;
export const ForecastMain = styled.div`
    padding-top: 8px;
`;
export const Span = styled.span``;
