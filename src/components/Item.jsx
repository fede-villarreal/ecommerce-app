import { StyleSheet, Text, View, Button } from 'react-native'

const Item = ({ item, deleteItem }) => {
    return (
        <View style={styles.itemContainer}>
            <View style={styles.itemTextContainer}>
                <Text style={styles.itemTitle}>Item: {item.title}</Text>
                <Text style={styles.itemDescription}>Descripcion: {item.description}</Text>
            </View>
            <Button title='DEL' onPress={() => deleteItem(item)} />
        </View>
    )
}

export default Item

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: "#872FF5",
        padding: 20,
        marginVertical: 10,
        marginHorizontal: 10,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    itemTextContainer: {
        flex: 1,
        marginRight: 10,
    },
    itemTitle: {
        width: "70%",
        color: "white",
        fontSize: 16,
        marginBottom: 10
    },
    itemDescription: {
        color: "white",
        fontSize: 12,
        marginBottom: 20
    }
})