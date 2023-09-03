// https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}

// const latitude = 44.34;
// const longitude = 10.99;
const latitude = 40.713051;
const longitude = -74.007233;
// const latitude = 33.448376;
// const longitude = -112.074036;const latitude = 33.448376;
// const longitude = -112.074036;
const APIkey = "2ddacdfd9cc9f65a43c686f0974d87d8";


export const getForecastWeather = () => {
    const weatherApi = fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
        ).then((res) => {
        console.log(res);    
        if(res.ok){
        return res.json();
       } else {
        return Promise.reject(`Error: ${res.status}`);
       }
    });
    return weatherApi;
};

export const parseWeatherData = (data) => {
    const main = data.main;
    const temperature = main && Math.ceil(main.temp);
    return temperature;
}