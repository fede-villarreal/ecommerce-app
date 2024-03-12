import { StyleSheet, FlatList } from 'react-native';
import { useGetCategoriesQuery } from '../app/services/shop.js';
import CategoryCard from './CategoryCard.jsx';

const Categories = ({ navigation }) => {

    const { data: categories } = useGetCategoriesQuery()

    return (
        <FlatList
            style={styles.list}
            data={categories}
            keyExtractor={item => item}
            renderItem={({ item }) => (
                <CategoryCard item={item} navigation={navigation} />
            )}
        />
    );
};

export default Categories;

const styles = StyleSheet.create({
    list: {
        height: 80
    }
});