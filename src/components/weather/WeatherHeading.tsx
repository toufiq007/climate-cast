import { useContext } from "react";
import Cloud from "../../assets/cloud.svg";
import Haze from "../../assets/haze.svg";
import Sun from "../../assets/sun.svg";
import Pin from "../../assets/pin.svg";
import { WeatherContext } from "../../context/weatherContext";
const WeatherHeading = () => {
  const { weatherData, isLoading, isError } = useContext(WeatherContext);

  return (
    <>
      <div>
        <div className="max-md:flex items-center justify-between md:-mt-10">
          {weatherData.climate === "Haze" ? (
            <img src={Haze} alt="haze" />
          ) : weatherData.climate === "Cloud" ? (
            <img src={Cloud} alt="cloud" />
          ) : (
            <img src={Sun} alt="Sun" />
          )}

          <div className="max-md:flex items-center max-md:space-x-4">
            <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
              {weatherData?.cloudPercentage?.all}
            </h1>
            <div className="flex items-center space-x-4 md:mb-4">
              <img src={Pin} alt="pin" />
              <h2 className="text-2xl lg:text-[50px]">
                {weatherData?.location}
              </h2>
            </div>
          </div>
        </div>
        <p className="text-sm lg:text-lg">
          {new Date(weatherData.time * 10000).toString()}
        </p>
      </div>
    </>
  );
};

export default WeatherHeading;
