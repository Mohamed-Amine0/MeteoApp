import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getWeatherIcon } from '../../constants/WeatherIcons';

interface CurrentWeatherProps {
  temperature: number;
  feelsLike: number;
  humidity: number;
  weatherCode: number;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ 
  temperature, 
  feelsLike, 
  humidity, 
  weatherCode 
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.weatherIcon}>{getWeatherIcon(weatherCode)}</Text>
        <Text style={styles.temperature}>{Math.round(temperature)}°C</Text>
      </View>
      
      <View style={styles.detailsContainer}>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Ressenti</Text>
          <Text style={styles.detailValue}>{Math.round(feelsLike)}°C</Text>
        </View>
        
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Humidité</Text>
          <Text style={styles.detailValue}>{humidity}%</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    marginHorizontal: 16,
    marginTop: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  weatherIcon: {
    fontSize: 64,
    marginRight: 16,
  },
  temperature: {
    fontSize: 54,
    fontWeight: 'bold',
    color: '#333',
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 15,
  },
  detailItem: {
    alignItems: 'center',
  },
  detailLabel: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  detailValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default CurrentWeather;