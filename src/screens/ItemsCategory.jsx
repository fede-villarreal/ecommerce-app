import { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import ItemCategoryCard from '../components/ItemCategoryCard.jsx';
import SearchBar from '../components/SearchBar.jsx';
import { useGetProductsByCategoryQuery } from '../app/services/shop.js';

const ItemsCategory = ({ route, navigation }) => {
    const { categorySelected } = route.params;
    const [filteredItems, setFilteredItems] = useState([]);
    const [searchedWord, setSearchedWord] = useState('');

    const handlerSearchedWord = (word) => setSearchedWord(word);

    const {data: products} = useGetProductsByCategoryQuery(categorySelected)

    useEffect(() => {

        if (categorySelected) {
            setFilteredItems(products)
        }

        if (searchedWord) {
            const searchedWordLower = searchedWord.toLowerCase();
            setFilteredItems(products.filter(item => item.title.toLowerCase().includes(searchedWordLower)));
        }

    }, [categorySelected, searchedWord, products]);

    return (
        <View style={styles.container}>
            <SearchBar handlerSearchedWord={handlerSearchedWord} />
            <FlatList
                style={styles.list}
                data={filteredItems}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <ItemCategoryCard item={item} navigation={navigation} />
                )}
            />
        </View>
    );
};

export default ItemsCategory;

const styles = StyleSheet.create({
    container: {
        height: '85%',
    },
    list: {
        marginBottom: 10
    }
});