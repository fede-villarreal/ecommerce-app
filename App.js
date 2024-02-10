import { StyleSheet, StatusBar, View } from 'react-native';
import Home from './src/screens/Home.jsx';
import colors from './src/utils/global/colors.js';

export default function App() {
  return (
      <View style={styles.container}>
        <Home />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  }
});