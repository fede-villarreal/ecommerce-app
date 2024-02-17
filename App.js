import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, BackHandler, StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import Home from './src/screens/Home.jsx';
import ItemsCategory from './src/screens/ItemsCategory.jsx';
import ItemDetail from './src/screens/ItemDetail.jsx';
import colors from './src/utils/global/colors.js';
import { fontCollection } from './src/utils/global/fonts.js';

export default function App() {
  const [fontsLoaded] = useFonts(fontCollection)
  const [categorySelected, setCategorySelected] = useState('')
  const [itemId, setItemId] = useState(0)

  useEffect(() => {
    const backAction = () => {
      if (itemId) {
        setItemId(0);
        return true;
      }
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
  }, [categorySelected, itemId]);

  if (!fontsLoaded) return null;

  const selectCategory = (category) => {
    setCategorySelected(category);
  };

  const selectItemId = (id) => {
    setItemId(id)
  }

  return (
    <>
      <StatusBar backgroundColor={colors.primary}/>
      <SafeAreaView style={styles.container}>
        {itemId
          ? <ItemDetail itemId={itemId} />
          : categorySelected
            ? <ItemsCategory categorySelected={categorySelected} selectItemId={selectItemId} />
            : <Home selectCategory={selectCategory} />
        }
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  }
});