# MeteoApp ☀️🌤️🌧️

Application météo développée avec Expo (React Native) qui affiche la météo actuelle et les prévisions horaires basées sur la géolocalisation de l'utilisateur.

## Fonctionnalités

- ✓ Géolocalisation avec gestion des permissions
- ✓ Affichage de la météo actuelle (température, ressenti, humidité)
- ✓ Prévisions horaires sur 24h
- ✓ Auto-rafraîchissement toutes les 15 minutes
- ✓ Support du mode clair/sombre
- ✓ Gestion des erreurs réseau
- ✓ Possibilité de rafraîchir manuellement les données (pull-to-refresh)

## Technologies utilisées

- **Expo/React Native** pour le développement multiplateforme
- **expo-location** pour la géolocalisation
- **date-fns** pour la gestion des dates et formats d'heures
- **TypeScript** pour un code type-safe
- **API Open-Meteo** pour les données météorologiques

## Installation

1. Cloner le dépôt

2. Installer les dépendances

   ```bash
   npm install
   ```

3. Lancer l'application

   ```bash
   npx expo start
   ```

## API Open-Meteo

Cette application utilise l'API gratuite [Open-Meteo](https://open-meteo.com/) qui fournit des données météorologiques précises sans nécessiter de clé API. Les prévisions sont basées sur les codes météo de l'Organisation Météorologique Mondiale (WMO).

## Structure du projet

- `/app` - Fichiers principaux de l'application (pages)
- `/components/weather` - Composants UI spécifiques à l'affichage météo
- `/constants` - Constantes et mappage des codes météo vers des icônes
- `/services` - Services pour la géolocalisation et les requêtes API
- `/types` - Définitions TypeScript pour les données météo

## Captures d'écran

- Page principale : Affiche la température actuelle, le ressenti, l'humidité et les prévisions horaires
- Page À propos : Informations sur l'application et les technologies utilisées

## Développement

Vous pouvez exécuter l'application sur :
- Android (via Emulator ou appareil physique)
- iOS (via Simulator ou appareil physique)
- Web (fonctionnalités limitées)

Pour plus d'informations sur le développement avec Expo, consultez la [documentation Expo](https://docs.expo.dev/).
