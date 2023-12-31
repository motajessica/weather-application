"use client";
import React, { useEffect, useState } from "react";
import Input from "./component/Input";
import Current from "./component/Current";
import WeatherDetails from "./component/WeatherDetails";
import WeatherForecast from "./component/WeatherForecast";
import { WeatherData } from "./interfaces";

const App = () => {
  const [data, setData] = useState<WeatherData | null>(null);
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  const [backgroundColor, setBackgroundColor] = useState<string>(
    "from-blue-500 to-blue-400 h-fit"
  );

  const url = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_API_KEY}&q=${location}&days=7&aqi=yes&alerts=yes`;

  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error();
        }
        const data = await response.json();
        setData(data);
        setLocation("");
        setError("");
      } catch (error) {
        setError("City not found");
        setData(null);
      }
    }
  };

  let content;
  if (data === null && error === "") {
    content = (
      <div className="text-white text-center h-screen mt-[5rem]">
        <h2 className="text-3xl font-bold mb-4">Welcome to the weather App </h2>
        <h3>Please Enter a City</h3>
      </div>
    );
  } else if (error !== "") {
    content = (
      <div className="text-white text-center h-screen mt-[5rem]">
        <p className="text-3xl font-bold mb-4">City not found</p>
        <p className="text-xl">Enter a valid City</p>
      </div>
    );
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
    );
  }

  useEffect(() => {
    if (data && data.location && data.location.localtime) {
      console.log("inside if");
      const localtime = data.location.localtime;
      const locationHour = new Date(localtime).getHours();
      const isDayTime = locationHour >= 6 && locationHour < 18;
      const background = isDayTime
        ? "from-blue-500 to-blue-400"
        : "from-[#3b4b66] to-[#34465a]";
      setBackgroundColor(background);
    }
  }, [data]);

  return (
    <div className={`bd-cover bg-gradient-to-r ${backgroundColor} h-fit`}>
      <div className="bg-white/25 w-full rounded-lg flex flex-col h-fit">
        <div className="flex flex-col  md:flex-row justify-between items-center p-12">
          <Input handleSearch={handleSearch} setLocation={setLocation} />
          <h1 className="mb-8 md:mb-0 order-1 text-white py-2 px4 rounded-xl italic font-bold ">
          <img className="w-16 h-auto sm:w-16 md:w-24 lg:w-32" src="/logo.png" alt="Logo" />
          </h1>
        </div>
        {content}
      </div>
    </div>
  );
};

export default App;
