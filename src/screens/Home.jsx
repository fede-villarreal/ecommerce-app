import { StyleSheet, View } from 'react-native';
import Header from '../components/Header.jsx';
import Categories from '../components/Categories.jsx';

const Home = ({selectCategory}) => {
    return (
        <>
            <Header title='Home'/>
            <Categories selectCategory={selectCategory}/>
        </>
    );
};

export default Home;

const styles = StyleSheet.create({});