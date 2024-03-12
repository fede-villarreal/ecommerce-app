import { View, StyleSheet } from 'react-native';
import Categories from '../components/Categories.jsx';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Categories navigation={navigation} />
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        height: '85%',
    }
})