/* eslint-disable @next/next/no-img-element */
interface DayForecast {
  day: any;
  date: string | number | Date;
  data: {
    forecast: any;
    current: {
      condition: {
        icon: string;
        text: string;
      };
      maxtemp_c: number;
      mintemp_c: number;
    };
  };
}

interface WeekForecastProps {
  data: {
    forecast: {
      forecastday: DayForecast[];
    }
  }
}

const DayForecast = ({ data }: WeekForecastProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-7 w-full py-3">
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

export default DayForecast;
