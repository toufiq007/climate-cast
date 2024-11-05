/* eslint-disable @typescript-eslint/no-explicit-any */
import { WeatherContext } from "../context/weatherContext";
import { useWeather } from "../hooks";

const WeatherProvider = ({ children }: any) => {
  const { weatherData, isLoading, isError } = useWeather();
  return (
    <WeatherContext.Provider value={{ weatherData, isLoading, isError }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
