import { useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

const weatherKey = process.env.REACT_APP_WEATHER_API_KEY;

const useWeatherApi = () => {
  const [weather, setWeather] = useState(null);
  const { setRememberedCity, getRememberedCity } = useLocalStorage();

  const [city, setCity] = useState(getRememberedCity());

  useEffect(() => {
    setRememberedCity(city);
  }, [city, setRememberedCity]);

  useEffect(() => {
    async function getWeather() {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${weatherKey}&q=${city}&aqi=yes`
      );

      const responseData = await response.json();

      setWeather(responseData);
    }
    getWeather();
  }, [city]);

  return { weather, city, setCity };
};

export default useWeatherApi;
