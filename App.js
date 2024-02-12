import React, { useState, useEffect } from 'react';
import { StyleSheet, View, BackHandler } from 'react-native';
import { useFonts } from 'expo-font';
import Home from './src/screens/Home.jsx';
import ItemsCategory from './src/screens/ItemsCategory.jsx';
import colors from './src/utils/global/colors.js';
import { fontCollection } from './src/utils/global/fonts.js';

export default function App() {
  const [fontsLoaded] = useFonts(fontCollection);
  const [categorySelected, setCategorySelected] = useState('');

  useEffect(() => {
    const backAction = () => {
      if (categorySelected) {
        setCategorySelected('');
        return true; // Evita que la aplicación se cierre
      }
      return false; // Permite que la aplicación se cierre
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
  }, [categorySelected]);

  if (!fontsLoaded) return null;

  const selectCategory = (category) => {
    setCategorySelected(category);
  };

  return (
    <View style={styles.container}>
      {categorySelected
        ? <ItemsCategory categorySelected={categorySelected} />
        : <Home selectCategory={selectCategory} />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  }
});