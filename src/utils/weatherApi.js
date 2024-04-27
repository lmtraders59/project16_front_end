import { handleServerResponse } from "../utils/api.js";
import { APIkey, latitude, longitude} from "./constants.js"
// const latitude = 40.713051;
// const longitude = -74.007233;

// const APIkey = "2ddacdfd9cc9f65a43c686f0974d87d8";
// const handleResponse = (handleServerResponse);

export const getForecastWeather = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then(handleServerResponse);
  return weatherApi;
};

export const parseWeatherData = (data) => {
  const main = data.main;
  const temperature = main && Math.ceil(main.temp);
  const weather = {
    temperature: {
      F: Math.round(temperature),
      C: Math.round(((temperature - 32) * 5) / 9),
    },
  };
  return weather;
};
