const API_KEY = '76c1c8d463c336e9375eb27926fd4f15';
const city = 'Yekaterinburg';

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;



const initialState = fetch(url).then(response => response.json())
    .then(data => data);

console.log(initialState);

export function reducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}