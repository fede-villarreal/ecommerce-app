import { useEffect, useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ItemCategoryCard from '../components/ItemCategoryCard.jsx';
import SearchBar from '../components/SearchBar.jsx';
import products from '../utils/data/products.json';

const ItemsCategory = ({ route, navigation }) => {
    const { categorySelected } = route.params;
    const [filteredItems, setFilteredItems] = useState([]);
    const [searchedWord, setSearchedWord] = useState('');

    const handlerSearchedWord = (word) => setSearchedWord(word);

    useEffect(() => {
        let filteredProducts = products;

        if (categorySelected) {
            filteredProducts = filteredProducts.filter(item => item.category === categorySelected);
        }

        if (searchedWord) {
            const searchedWordLower = searchedWord.toLowerCase();
            filteredProducts = filteredProducts.filter(item => item.title.toLowerCase().includes(searchedWordLower));
        }

        setFilteredItems(filteredProducts);
    }, [categorySelected, searchedWord]);

    return (
        <>
            <SearchBar handlerSearchedWord={handlerSearchedWord} />
            <FlatList
                style={styles.list}
                data={filteredItems}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <ItemCategoryCard item={item} navigation={navigation} />
                )}
            />
        </>
    );
};

export default ItemsCategory;

const styles = StyleSheet.create({
    list: {
        marginBottom: 10
    }
});