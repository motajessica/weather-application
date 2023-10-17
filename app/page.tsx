"use client";
import React, { useState } from "react";
import Input from "./component/Input";
import Current from "./component/Current";
import WeatherDetails from "./component/WeatherDetails";
import WeatherForecast from "./component/WeatherForecast";

const App = () => {
  const [data, setData] = useState({});
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
        setData({})
      }
    }
  }

  let content;
  if (Object.keys(data).length === 0 && error === '') {
    content =(
      <div>
        <h2>Welcome to the weather app </h2>
      </div>
    )
  } else if ( error !== ''){ 
    content = (
      <div>
        <p>City not found</p>
        <p>Enter a valid City</p>
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
  return (
    <div className="bd-cover bg-gradient-to-r from-blue-500 to-blue-300 h-fit ">
      <div className="bg-white/25 w-full rounded-lg flex flex-col h-fit">
        {/* Logo and Input */}
        <div className="flex flex-col  md:flex-row justify-between items-center p-12">
          <Input handleSearch={handleSearch} setLocation={setLocation} />
          <h1 className="mb-8 md:mb-0 order-1 text-white py-2 px4 rounded-xl italic font-bold ">
            {" "}
            My Weather app{" "}
          </h1>
        </div>
        {content}
      </div>
    </div>
  );
};

export default App;
