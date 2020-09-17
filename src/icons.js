import fog from './icons/fog.png';
import cloudy from './icons/cloudy.png';
import clear from './icons/clear.png';
import rain from './icons/rain.png';
import snow from './icons/snow.png';
import fewCloudsD from './icons/partlycloudy.png'
import thunderstorm from './icons/chancetstorms.png'
import unknown from './icons/unknown.png';

const weatherIcons = {
    "01d": clear,
    "01n": clear,
    "02d": fewCloudsD,
    "02n": fewCloudsD,
    "03d": cloudy,
    "03n": cloudy,
    "04d": cloudy,
    "04n": cloudy,
    "09d": rain,
    "09n": rain,
    "10d": rain,
    "10n": rain,
    "11d": thunderstorm,
    "11n": thunderstorm,
    "13d": snow,
    "13n": snow,
    "50d": fog,
    "50n": fog,
}

export { weatherIcons };
