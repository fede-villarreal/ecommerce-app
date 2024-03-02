import React from 'react';
import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import { store } from './src/app/store.js';
import Navigator from './src/navigation/Navigator.jsx';
import colors from './src/utils/global/colors.js';
import { fontCollection } from './src/utils/global/fonts.js';

export default function App() {
  const [fontsLoaded] = useFonts(fontCollection)

  if (!fontsLoaded) return null;

  return (
    <>
      <StatusBar backgroundColor={colors.primary} />
      <Provider store={store}>
        <Navigator />
      </Provider>
    </>
  );
}