import { StyleSheet, Text, Pressable, Image } from 'react-native'
import colors from '../utils/global/colors.js'
import fonts from '../utils/global/fonts.js'
import { toCapitalCase } from '../utils/utils.js'

const ItemCategoryCard = ({ item, selectItemId }) => {
    return (
        <Pressable onPress={() => selectItemId(item.id)} style={styles.container}>
            <Image style={styles.image} source={{ uri: item.thumbnail }} resizeMode='cover' />
            <Text style={styles.text}>{toCapitalCase(item.title)}</Text>
        </Pressable>
    )
}

export default ItemCategoryCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        width: "90%",
        marginHorizontal: "5%",
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        gap: 20
    },
    image: {
        minWidth: 90,
        minHeight: 90,
        width: '30%',
        height: 'auto',
        borderRadius: 5
    },
    text: {
        width: "60%",
        fontSize: 18,
        fontFamily: fonts.subtitle
    }
})