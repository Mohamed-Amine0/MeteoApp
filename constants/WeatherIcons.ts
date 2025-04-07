// Mapping des codes météo WMO (https://open-meteo.com/en/docs) vers des icônes emoji
export const weatherIcons: {[key: number]: string} = {
  0: "☀️",    // Ciel dégagé
  1: "🌤️",    // Principalement dégagé
  2: "⛅",    // Partiellement nuageux
  3: "☁️",    // Couvert
  45: "🌫️",   // Brouillard
  48: "🌫️",   // Brouillard givrant
  51: "🌦️",   // Bruine légère
  53: "🌦️",   // Bruine modérée
  55: "🌧️",   // Bruine dense
  56: "🌨️",   // Bruine verglaçante légère
  57: "🌨️",   // Bruine verglaçante dense
  61: "🌧️",   // Pluie légère
  63: "🌧️",   // Pluie modérée
  65: "🌧️",   // Pluie forte
  66: "🌨️",   // Pluie verglaçante légère
  67: "🌨️",   // Pluie verglaçante forte
  71: "❄️",   // Neige légère
  73: "❄️",   // Neige modérée
  75: "❄️",   // Neige forte
  77: "❄️",   // Grains de neige
  80: "🌧️",   // Averses de pluie légères
  81: "🌧️",   // Averses de pluie moyennes
  82: "🌧️",   // Averses de pluie violentes
  85: "❄️",   // Faibles averses de neige
  86: "❄️",   // Fortes averses de neige
  95: "⛈️",   // Orage
  96: "⛈️",   // Orage avec grêle légère
  99: "⛈️"    // Orage avec grêle forte
};

// Fonction d'aide pour obtenir l'icône correspondant à un code météo
export const getWeatherIcon = (code: number): string => {
  return weatherIcons[code] || "❓"; // Icône par défaut si le code n'est pas reconnu
};