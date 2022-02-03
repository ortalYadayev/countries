import axios from 'axios'

const instanceAxiosCountry = axios.create({
    baseURL: 'https://restcountries.com/v3.1',
    headers: {
        'Accept': 'application/json',
    }
});

const instanceAxiosWeather = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
    headers: {
        'Accept': 'application/json',
    }
});


export {instanceAxiosCountry, instanceAxiosWeather}