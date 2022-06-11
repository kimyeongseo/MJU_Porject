import axios from "axios";

const key = process.env.REACT_APP_API_KEY;
const ABS_ZERO = 273.15; 

export const getKoreaData = async () => {
        const data =  await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=37.5665&lon=126.9780&appid=${key}`
    );
    console.log("get korea weather");
    const weatherData = await data.json();

    const weather = {
        name: weatherData.name,
        temp: (weatherData.main.temp - ABS_ZERO).toFixed(2),
        tempFeel: (weatherData.main.feels_like - ABS_ZERO).toFixed(2),
        tempMin: (weatherData.main.temp_min - ABS_ZERO).toFixed(2),
        tempMax: (weatherData.main.temp_max - ABS_ZERO).toFixed(2),
        hum: weatherData.main.humidity,
        main: weatherData.weather[0].main,
        wind: weatherData.wind.speed,
        id: weatherData.weather[0].id, 
        rain: weatherData.rain ? weatherData.rain["1h"] : null,
        icon: weatherData.weather[0].icon,
    }
        return weather;
}


export const getTorontoData = async () => {
    const data =  await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=43.663693&lon=-79.411519&appid=${key}`
);
console.log("get toronto weather");
const weatherData = await data.json();

const weather = {
    name: weatherData.name,
    temp: (weatherData.main.temp - ABS_ZERO).toFixed(2),
    tempFeel: (weatherData.main.feels_like - ABS_ZERO).toFixed(2),
    tempMin: (weatherData.main.temp_min - ABS_ZERO).toFixed(2),
    tempMax: (weatherData.main.temp_max - ABS_ZERO).toFixed(2),
    hum: weatherData.main.humidity,
    main: weatherData.weather[0].main,
    wind: weatherData.wind.speed,
    id: weatherData.weather[0].id, 
    rain: weatherData.rain ? weatherData.rain["1h"] : null,
    icon: weatherData.weather[0].icon,
}
    return weather;
}

export const getVancouverData = async () => {
    const data =  await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=49.241375&lon=-123.108508&appid=${key}`
);
console.log("get vancouver weather");
const weatherData = await data.json();

const weather = {
    name: weatherData.name,
    temp: (weatherData.main.temp - ABS_ZERO).toFixed(2),
    tempFeel: (weatherData.main.feels_like - ABS_ZERO).toFixed(2),
    tempMin: (weatherData.main.temp_min - ABS_ZERO).toFixed(2),
    tempMax: (weatherData.main.temp_max - ABS_ZERO).toFixed(2),
    hum: weatherData.main.humidity,
    main: weatherData.weather[0].main,
    wind: weatherData.wind.speed,
    id: weatherData.weather[0].id, 
    rain: weatherData.rain ? weatherData.rain["1h"] : null,
    icon: weatherData.weather[0].icon,
}
    return weather;
}

