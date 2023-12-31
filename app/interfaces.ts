
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

export interface CurrentProps {
  data: {
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
  };
}

export interface WeatherData {
  current: {
    condition: {
      icon: string;
      text: string;
    };
    temp_c: number;
  };
  location: {
    localtime: number;
    name: string;
    country: string;
  };
}

export interface InputProps {
  handleSearch: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}

export interface WeatherDetailsProps {
  data: {
    current: {
      feelslike_c: number;
      wind_kph: number;
      uv: number;
      humidity: number;
      precip_mm: number;
      pressure_mb: number;
    };
    forecast: {
      forecastday: [
        {
          astro: {
            sunrise: string;
            sunset: string;
          };
        }
      ];
    };
  };
}
