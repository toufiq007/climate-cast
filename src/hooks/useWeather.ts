/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { IWeatherData } from "../types/types";

const useWeather = () => {
  const [weatherData, setWeatherData] = useState<IWeatherData>({
    location: "",
    climate: "",
    cloudPercentage: "",
    humidity: "",
    lattitude: "",
    longitude: "",
    maxTemperature: "",
    minTemperature: "",
    temperature: "",
    time: "",
    wind: "",
  });
  const [isLoading, setisLoading] = useState({ state: false, message: "" });
  const [isError, setisError] = useState(null);

  const fetchWeatherData = async (latitude: string, longitude: string) => {
    try {
      setisLoading({
        ...isLoading,
        state: true,
        message: "Fetching weather data...",
      });

      // make api call
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&units=metric`
      );
      if (!response.ok) {
        const errorMessage = `Failed to fetch data!! ${response.status}`;
        throw new Error(errorMessage);
      }
      const data = await response.json();

      const updatedWeatherData = {
        ...weatherData,
        location: data?.name,
        climate: data?.weather[0]?.main,
        cloudPercentage: data?.clouds,
        humidity: data?.main?.humidity,
        lattitude: longitude,
        longitude: latitude,
        maxTemperature: data?.main?.temp_max,
        minTemperatur: data?.main?.temp_min,
        temperature: data?.main?.temp,
        time: data?.dt,
        wind: data?.wind?.speed,
      };

      setWeatherData(updatedWeatherData);
    } catch (err: any) {
      setisError(err);
      console.log(err);
    } finally {
      setisLoading({ ...isLoading, state: false, message: "" });
    }
  };

  return {
    weatherData,
    isLoading,
    isError,
    fetchWeatherData,
  };
};

export default useWeather;
