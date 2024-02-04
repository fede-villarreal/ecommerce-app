import { StyleSheet, View, FlatList } from 'react-native';
import Item from './Item.jsx';

const ItemList = ({ itemList, deleteItem }) => {
    return (
        <View>
            <FlatList
                style={styles.flatListContainer}
                data={itemList}
                renderItem={({ item }) => (
                    <Item
                        item={item}
                        deleteItem={deleteItem}
                    />
                )}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default ItemList

const styles = StyleSheet.create({
    flatListContainer: {
        marginBottom: 100
    }
})