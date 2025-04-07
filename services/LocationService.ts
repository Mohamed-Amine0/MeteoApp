import * as Location from "expo-location";
import { Location as LocationType } from "../types";

// Demande les permissions de localisation et récupère la position actuelle
export const getCurrentLocation = async (): Promise<LocationType> => {
  // Demande la permission d'accéder à la localisation
  const { status } = await Location.requestForegroundPermissionsAsync();
  
  if (status !== "granted") {
    throw new Error("La permission d'accéder à la localisation a été refusée");
  }

  // Récupère la position actuelle
  const location = await Location.getCurrentPositionAsync({});
  
  return {
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
  };
};