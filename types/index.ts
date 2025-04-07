// Types pour l'API Open-Meteo
export interface WeatherResponse {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: {
    time: string;
    temperature_2m: string;
    apparent_temperature: string;
    relative_humidity_2m: string;
    weather_code: string;
  };
  current: {
    time: string;
    temperature_2m: number;
    apparent_temperature: number;
    relative_humidity_2m: number;
    weather_code: number;
  };
  hourly_units: {
    time: string;
    temperature_2m: string;
    weather_code: string;
  };
  hourly: {
    time: string[];
    temperature_2m: number[];
    weather_code: number[];
  };
}

// Type pour les prévisions horaires formatées
export interface HourlyForecast {
  time: string;
  temperature: number;
  weatherCode: number;
}

// Type pour les coordonnées de géolocalisation
export interface Location {
  latitude: number;
  longitude: number;
}