"use client";
import { useState } from "react";

import Input from "./component/Input";

const Home = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const url = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${location}&days=7&aqi=yes&alerts=yes`;

  const handleSearch = async (e: { key: string; preventDefault: () => void; }) =>{
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

  return (
    <div className="bd-cover bg-gradient-to-r from-blue-500 to-blue-300 h-screen">
      <div className="bg-white/25 w-full rounded-lg flex flex-col h-fit">
        {/* Logo and Input */}
        <div className="flex flex-col  md:flex-row justify-between items-center p-12">
          <Input />
          <h1 className="mb-8 md:mb-0 order-1 text-white py-2 px4 rounded-xl italic font-bold ">
            {" "}
            Weather{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
