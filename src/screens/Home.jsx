import { StyleSheet, View } from 'react-native';
import Header from '../components/Header.jsx';
import Categories from '../components/Categories.jsx';

const Home = () => {
    return (
        <View>
            <Header title='Home' />
            <Categories />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})