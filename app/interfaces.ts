
export interface DayForecast {
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

export interface WeekForecastProps {
  data: {
    forecast: {
      forecastday: DayForecast[];
    };
  };
}



