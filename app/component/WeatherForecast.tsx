import React from "react";

const WeatherForecast = ({ data }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-7 gap-8 w-full py-3">
      {data.forecast.forecastday.map((day, index) => (
        <div
          key={index}
          className="bg-white/40 p-2 text-center rounded-lg flex flex-col items-center"
        >
          <p>
            {new Date(day.date).toLocaleDateString("en-NZ", {
              weekday: "short",
              day: "numeric",
              month: "short",
            })}
          </p>
          <img src={day.day.condition.icon} alt="day.day.condition.icon" />
          <div>
            <p>H {day.day.maxtemp_c.toFixed()}ºC</p>
            <p>L {day.day.mintemp_c.toFixed()}ºC</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeatherForecast;
