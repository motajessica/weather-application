import { FaWind } from "react-icons/fa";
import { GiSunset } from "react-icons/gi";
import { GiSunrise } from "react-icons/gi";
import { FaRegCompass } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";
import { BsFillCloudRainFill } from "react-icons/bs";
import { WiHumidity } from "react-icons/wi";
import { WiWindy } from "react-icons/wi";
import { WiThermometer } from "react-icons/wi";
import { WeatherDetailsProps } from "../interfaces";


const WeatherDetails: React.FC<WeatherDetailsProps> = ({ data }) => {
  return (
    <>
      <div className="p-12">
        <h1 className="mb-4 text-2xl text-white">Weather Details </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
            <div className="text-xl">
              <h3> Feels Like </h3>
              <h3>{data.current.feelslike_c}ºC</h3>
            </div>
            <div>
              <WiThermometer fontSize={40} />
            </div>
          </div>

          <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
            <div className="text-xl">
              <h3> Wind Speed</h3>
              <h3>{data.current.wind_kph}km/h</h3>
            </div>
            <div>
              <FaWind fontSize={30} />
            </div>
          </div>

          <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
            <div className="text-xl">
              <h3> Sunrise</h3>
              <h3>{data.forecast.forecastday[0].astro.sunrise}</h3>
            </div>
            <div>
              <GiSunrise fontSize={40} />
            </div>
          </div>

          <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
            <div className="text-xl">
              <h3> Sunset </h3>
              <h3>{data.forecast.forecastday[0].astro.sunset}</h3>
            </div>
            <div>
              <GiSunset fontSize={40} />
            </div>
          </div>

          <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
            <div className="text-xl">
              <h3> UV Index</h3>
              <h3>{data.current.uv}</h3>
            </div>
            <div>
              <BsSunFill fontSize={30} />
            </div>
          </div>

          <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
            <div className="text-xl">
              <h3> Humidty</h3>
              <h3>{data.current.humidity}%</h3>
            </div>
            <div>
              <WiHumidity fontSize={40} />
            </div>
          </div>

          <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
            <div className="text-xl">
              <h3> Precipitation </h3>
              <h3>{data.current.precip_mm}mm</h3>
            </div>
            <div>
              <BsFillCloudRainFill fontSize={30} />
            </div>
          </div>

          <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl">
            <div className="text-xl">
              <h3> Air Pressure </h3>
              <h3>{data.current.pressure_mb}hPa</h3>
            </div>
            <div>
              <WiWindy fontSize={40} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherDetails;
