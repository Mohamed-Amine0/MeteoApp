import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Text, RefreshControl, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// Import des composants
import Loader from '@/components/weather/Loader';
import CurrentWeather from '@/components/weather/CurrentWeather';
import HourlyForecasts from '@/components/weather/HourlyForecasts';
import ErrorView from '@/components/weather/ErrorView';

// Import des services
import { getCurrentLocation } from '@/services/LocationService';
import { fetchWeatherData, formatHourlyForecasts } from '@/services/WeatherService';

// Import des types
import { HourlyForecast, Location, WeatherResponse } from '@/types';

export default function HomeScreen() {
  // États
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [location, setLocation] = useState<Location | null>(null);
  const [weatherData, setWeatherData] = useState<WeatherResponse | null>(null);
  const [hourlyForecasts, setHourlyForecasts] = useState<HourlyForecast[]>([]);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  // Fonction pour charger les données météo
  const loadWeatherData = useCallback(async () => {
    try {
      setError(null);
      setLoading(true);

      // Récupération de la localisation
      const currentLocation = await getCurrentLocation();
      setLocation(currentLocation);

      // Récupération des données météo
      const data = await fetchWeatherData(currentLocation);
      setWeatherData(data);

      // Formatage des prévisions horaires
      const formattedForecasts = formatHourlyForecasts(data, 24);
      setHourlyForecasts(formattedForecasts);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  // Gestion du rafraîchissement
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    loadWeatherData();
  }, [loadWeatherData]);

  // Effet pour charger les données au démarrage et configurer l'auto-rafraîchissement
  useEffect(() => {
    loadWeatherData();

    // Configuration de l'auto-rafraîchissement toutes les 15 minutes (900000 ms)
    const refreshInterval = setInterval(() => {
      loadWeatherData();
    }, 900000);

    // Nettoyage de l'intervalle lorsque le composant est démonté
    return () => clearInterval(refreshInterval);
  }, [loadWeatherData]);

  // Affichage du loader pendant le chargement
  if (loading && !refreshing) {
    return <Loader message="Récupération des données météo..." />;
  }

  // Affichage d'une erreur si nécessaire
  if (error && !weatherData) {
    return <ErrorView message={error} onRetry={loadWeatherData} />;
  }

  // Affichage des données météo
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.header}>
          <Text style={styles.title}>Météo</Text>
          <Text style={styles.subtitle}>Prévisions en temps réel</Text>
        </View>

        {weatherData && (
          <>
            <CurrentWeather
              temperature={weatherData.current.temperature_2m}
              feelsLike={weatherData.current.apparent_temperature}
              humidity={weatherData.current.relative_humidity_2m}
              weatherCode={weatherData.current.weather_code}
            />

            <HourlyForecasts forecasts={hourlyForecasts} />
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  header: {
    padding: 16,
    paddingTop: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginTop: 4,
  },
});
