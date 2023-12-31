/* eslint-disable @next/next/no-img-element */
import React from "react";
// import { getCurretnDate } from "../utils/currentDate";
import { CiLocationOn } from "react-icons/ci";
import { CurrentProps } from "../interfaces";

const Current = ({ data }: CurrentProps) => {
  if (!data) {
    return null;
  }
  const weatherIcon = data.current.condition.icon;
  return (
    <>
      <div className="flex flex-col mb-8 md:mb-0 items-start gap-2 w-1/2">
        <div className="flex items-center">
          <div>
            <h1 className="text-3xl text-white">Today</h1>
          </div>
          {weatherIcon && (
            <div>
              <img
                className="w-[70px] object-cover"
                src={weatherIcon}
                alt={data.current.condition.text}
              />
            </div>
          )}
        </div>
        <p className="text-3xl text-white">
          {data.current.temp_c.toFixed()}
          <span>ºC</span>
        </p>
        <span className="text-white">{data.current.condition.text}</span>
        <div className="flex items-center text-black font-semibold bg-white/80 px-2 py-2 rounded-xl">
          <CiLocationOn fontSize={22} />
          <span>
            {data.location.name}, {data.location.country}
          </span>
        </div>
      </div>
    </>
  );
};

export default Current;
