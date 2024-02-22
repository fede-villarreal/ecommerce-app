import React from 'react';
import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import Navigator from './src/navigation/Navigator.jsx';
import colors from './src/utils/global/colors.js';
import { fontCollection } from './src/utils/global/fonts.js';

export default function App() {
  const [fontsLoaded] = useFonts(fontCollection)

  if (!fontsLoaded) return null;

  return (
    <>
      <StatusBar backgroundColor={colors.primary} />
      <Navigator />
    </>
  );
}