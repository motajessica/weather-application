"use client";
import React, { useState } from "react";
import Input from "./component/Input";
import Current from "./component/Current";
import WeatherDetails from "./component/WeatherDetails";
import WeatherForecast from "./component/WeatherForecast";


interface WeatherData {
  current: {
    condition: {
      icon: string;
      text: string;
    };
    temp_c: number;
  };
  location: {
    name: string;
    country: string;
  };
  
}


const App = () => {
  const [data, setData] = useState<WeatherData | null>(null);
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const url = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_API_KEY}&q=${location}&days=7&aqi=yes&alerts=yes`;

  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter"){
      e.preventDefault()
      try {
        const response = await fetch(url)
        if(!response.ok){
          throw new Error()
        }
        const data = await response.json()
        setData(data)
        setLocation("")
        setError("")
      } catch (error) {
        setError("City not found")
        setData(null)
      }
    }
  }

  let content;
  if (data === null && error === '') {
    content =(
      <div className="text-white text-center h-screen mt-[5rem]">
        <h2 className="text-3xl font-bold mb-4">Welcome to the weather app </h2>
        {/* <p className="text-xl"> Enter a city name</p> */}
      </div>
    )
  } else if ( error !== ''){ 
    content = (
      <div className="text-white text-center h-screen mt-[5rem]">
        <p className="text-3xl font-bold mb-4">City not found</p>
        <p className="text-xl">Enter a valid City</p>
      </div>
    )
  } else {
    content = (
      <>
      <div className="flex md:flex-row flex-col p-12 items-center justify-between">
        <Current data={data} />
        <WeatherForecast data={data} />
      </div>
      <div>
        <WeatherDetails data={data} />
      </div>
      </>
    )
  }

const currentHour = new Date().getHours();
const isDayTime = currentHour >= 6 && currentHour < 18;
const backgroundColor = isDayTime ? "from-blue-500 to-blue-400 h-fit " : "bg-gradient-to-r from-[#3b4b66] to-[#34465a]";

  return (
    <div className={`bd-cover bg-gradient-to-r ${backgroundColor} h-fit`}>
      <div className="bg-white/25 w-full rounded-lg flex flex-col h-fit">
        {/* Logo and Input */}
        <div className="flex flex-col  md:flex-row justify-between items-center p-12">
          <Input handleSearch={handleSearch} setLocation={setLocation} />
          <h1 className="mb-8 md:mb-0 order-1 text-white py-2 px4 rounded-xl italic font-bold ">
            LOGO PLACEHOLDER
          </h1>
        </div>
        {content}
      </div>
    </div>
  );
};

export default App;
