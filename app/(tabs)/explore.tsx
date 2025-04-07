import { StyleSheet, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#6b9fb9"
          name="cloud.sun.fill"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">À propos de l'application</ThemedText>
      </ThemedView>
      <ThemedText>
        Une application météo simple utilisant Expo (React Native) qui affiche la météo actuelle et les prévisions horaires.
      </ThemedText>
      
      <Collapsible title="Fonctionnalités">
        <ThemedText>
          ✓ Géolocalisation avec gestion des permissions
        </ThemedText>
        <ThemedText>
          ✓ Affichage de la météo actuelle (température, ressenti, humidité)
        </ThemedText>
        <ThemedText>
          ✓ Prévisions horaires sur 24h
        </ThemedText>
        <ThemedText>
          ✓ Auto-rafraîchissement toutes les 15 minutes
        </ThemedText>
        <ThemedText>
          ✓ Support du mode clair/sombre
        </ThemedText>
        <ThemedText>
          ✓ Gestion des erreurs réseau
        </ThemedText>
      </Collapsible>
      
      <Collapsible title="Technologies utilisées">
        <ThemedText>
          • <ThemedText type="defaultSemiBold">Expo/React Native</ThemedText> pour le développement multiplateforme
        </ThemedText>
        <ThemedText>
          • <ThemedText type="defaultSemiBold">expo-location</ThemedText> pour la géolocalisation
        </ThemedText>
        <ThemedText>
          • <ThemedText type="defaultSemiBold">date-fns</ThemedText> pour la gestion des dates
        </ThemedText>
        <ThemedText>
          • <ThemedText type="defaultSemiBold">TypeScript</ThemedText> pour un code type-safe
        </ThemedText>
        <ThemedText>
          • <ThemedText type="defaultSemiBold">API Open-Meteo</ThemedText> pour les données météo
        </ThemedText>
      </Collapsible>
      
      <Collapsible title="API Open-Meteo">
        <ThemedText>
          Cette application utilise l'API gratuite Open-Meteo pour récupérer les données météorologiques.
        </ThemedText>
        <ThemedText>
          L'API fournit des données météo précises sans besoin de clé API, ce qui la rend parfaite pour des projets comme celui-ci.
        </ThemedText>
        <ExternalLink href="https://open-meteo.com/en/docs">
          <ThemedText type="link">Documentation Open-Meteo</ThemedText>
        </ExternalLink>
      </Collapsible>
      
      <Collapsible title="Codes météo">
        <ThemedText>
          Les icônes météo sont basées sur les codes météo WMO (World Meteorological Organization) :
        </ThemedText>
        <ThemedText>
          • 0 : Ciel dégagé ☀️
        </ThemedText>
        <ThemedText>
          • 1-3 : Nuageux 🌤️ ⛅ ☁️
        </ThemedText>
        <ThemedText>
          • 45, 48 : Brouillard 🌫️
        </ThemedText>
        <ThemedText>
          • 51-67 : Pluie/Bruine 🌧️
        </ThemedText>
        <ThemedText>
          • 71-86 : Neige ❄️
        </ThemedText>
        <ThemedText>
          • 95-99 : Orage ⛈️
        </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#6b9fb9',
    bottom: -90,
    right: 20,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
