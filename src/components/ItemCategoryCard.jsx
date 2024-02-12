import { StyleSheet, Text, View, Image } from 'react-native';
import colors from '../utils/global/colors.js';
import fonts from '../utils/global/fonts.js';
import { toCapitalCase } from '../utils/utils.js';

const ItemCategoryCard = ({ item }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: item.thumbnail }} resizeMode='cover' />
            <Text style={styles.text}>{toCapitalCase(item.title)}</Text>
        </View>
    );
};

export default ItemCategoryCard;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        width: "80%",
        marginHorizontal: "10%",
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        gap: 20
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 5
    },
    text: {
        width: "60%",
        fontSize: 18,
        fontFamily: fonts.subtitle
    }
});