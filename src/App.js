import React from 'react';
import { WeatherCard } from './WeatherCard';
import { Container } from './WeatherCard/WrapElements';





function App(props) {
    return <Container>
        <WeatherCard />
    </Container>
}

export default App;