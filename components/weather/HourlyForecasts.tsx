import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { HourlyForecast } from '../../types';
import { getWeatherIcon } from '../../constants/WeatherIcons';

interface HourlyForecastsProps {
  forecasts: HourlyForecast[];
}

const HourlyForecasts: React.FC<HourlyForecastsProps> = ({ forecasts }) => {
  const renderItem = ({ item }: { item: HourlyForecast }) => (
    <View style={styles.forecastItem}>
      <Text style={styles.forecastTime}>{item.time}</Text>
      <Text style={styles.forecastIcon}>{getWeatherIcon(item.weatherCode)}</Text>
      <Text style={styles.forecastTemperature}>{Math.round(item.temperature)}°C</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Prévisions horaires</Text>
      <FlatList
        data={forecasts}
        renderItem={renderItem}
        keyExtractor={(item, index) => `forecast-${index}`}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    marginHorizontal: 16,
    marginTop: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  listContent: {
    paddingVertical: 10,
  },
  forecastItem: {
    alignItems: 'center',
    marginHorizontal: 12,
    minWidth: 60,
  },
  forecastTime: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 8,
  },
  forecastIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  forecastTemperature: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
});

export default HourlyForecasts;