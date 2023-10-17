import { FaWind } from "react-icons/fa";
import {GiSunset} from "react-icons/gi";
import {GiSunrise} from "react-icons/gi";
import {FaRegCompass} from "react-icons/fa";
import {BsSunFill} from "react-icons/bs"; 
import {BsFillCloudRainFill} from "react-icons/bs"; 
import {WiHumidity} from "react-icons/wi"; 



const WeatherDetails = ( {data} ) => {
  return (
    <>
    <div className="p-12">
      <h1 className='mb-4 text-2xl text-white'>Weather Details </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

        
        <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl"> 
          <div className="text-2xl">
            <h3> Wind Speed</h3>
            <h3>{data.current.wind_kph}km/h</h3>
          </div>
          <div>
            <FaWind fontSize={30}/>
          </div>
        </div>


        <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl"> 
          <div className="text-2xl">
            <h3> UV </h3>
            <h3>{data.current.wind_kph}km/h</h3>
          </div>
          <div>
            <BsSunFill fontSize={30}/>
          </div>
        </div>



        <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl"> 
          <div className="text-2xl">
            <h3> Sunrise</h3>
            <h3>{data.current.wind_kph}km/h</h3>
          </div>
          <div>
            <GiSunrise fontSize={30}/>
          </div>
        </div>



        <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl"> 
          <div className="text-2xl">
            <h3> Sunset </h3>
            <h3>{data.current.wind_kph}km/h</h3>
          </div>
          <div>
            <GiSunset fontSize={30}/>
          </div>
        </div>



        <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl"> 
          <div className="text-2xl">
            <h3> Humidty</h3>
            <h3>{data.current.wind_kph}km/h</h3>
          </div>
          <div>
            <WiHumidity fontSize={30}/>
          </div>
        </div>


        <div className="bg-white/50 flex p-4 items-center justify-center gap-6 rounded-xl"> 
          <div className="text-2xl">
            <h3> Precipitation </h3>
            <h3>{data.current.wind_kph}km/h</h3>
          </div>
          <div>
            <BsFillCloudRainFill fontSize={30}/>
          </div>
        </div>


      </div>
    </div>
    </>
  )
}

export default WeatherDetails