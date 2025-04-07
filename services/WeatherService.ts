import { format, fromUnixTime } from "date-fns";
import { fr } from "date-fns/locale";
import { HourlyForecast, Location, WeatherResponse } from "../types";

// URL de base de l'API Open-Meteo
const BASE_URL = "https://api.open-meteo.com/v1/forecast";

// Récupère les données météo depuis l'API Open-Meteo
export const fetchWeatherData = async (location: Location): Promise<WeatherResponse> => {
  try {
    const { latitude, longitude } = location;
    
    // Construction de l'URL avec les paramètres
    const url = `${BASE_URL}?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,relative_humidity_2m,weather_code&hourly=temperature_2m,weather_code&timezone=auto`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Erreur lors de la récupération des données météo: ${response.status}`);
    }
    
    const data: WeatherResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur lors de la récupération des données météo:", error);
    throw error;
  }
};

// Formatte les prévisions horaires pour les rendre plus faciles à utiliser
export const formatHourlyForecasts = (data: WeatherResponse, limit: number = 24): HourlyForecast[] => {
  const forecasts: HourlyForecast[] = [];
  
  // Boucle à travers les données de prévision horaire
  for (let i = 0; i < Math.min(data.hourly.time.length, limit); i++) {
    // Convertit le timestamp en objet Date
    const date = new Date(data.hourly.time[i]);
    
    forecasts.push({
      // Formate l'heure au format local 24h (ex: 16h)
      time: format(date, 'HH\'h\'', { locale: fr }),
      temperature: data.hourly.temperature_2m[i],
      weatherCode: data.hourly.weather_code[i]
    });
  }
  
  return forecasts;
};