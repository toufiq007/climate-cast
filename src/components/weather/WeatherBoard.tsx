import { useContext } from "react";
import AddFavourite from "./AddFavourite";
import WeatherCondition from "./WeatherCondition";
import WeatherHeading from "./WeatherHeading";
import { WeatherContext } from "../../context/weatherContext";

const WeatherBoard = () => {
  const { weatherData, isLoading, isError } = useContext(WeatherContext);

  console.log({ weatherData, isLoading, isError });

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <section className="">
        <div className="container">
          <div className="grid bg-black/20 rounded-xl backdrop-blur-md border-2 lg:border-[3px] border-white/[14%] px-4 lg:px-14 py-6 lg:py-10 min-h-[520px] max-w-[1058px] mx-auto">
            <div className="grid md:grid-cols-2 gap-10 md:gap-6">
              <AddFavourite />
              <WeatherHeading />
              <WeatherCondition />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WeatherBoard;
