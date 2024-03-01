import { StyleSheet, Text, View } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import colors from '../utils/global/colors'
import fonts from '../utils/global/fonts'

const CartItem = ({ item }) => {
    return (
        <View style={styles.card}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{item.title}</Text>
                <Text style={styles.text2}>{item.brand}</Text>
                <Text style={styles.text2}>$ {item.price}</Text>
            </View>
            <Entypo name="trash" size={30} color={colors.text} />
        </View>
    )
}

export default CartItem

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.secondary,
        padding: 20,
        margin: 10,
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        height: 100,
        alignItems: "center"
    },
    textContainer: {
        width: "70%"
    },
    text: {
        color: colors.text,
        fontSize: 19,
        fontFamily: fonts.subtitle
    },
    text2: {
        color: colors.text,
        fontSize: 14,
        fontFamily: fonts.text
    }
})