import { StyleSheet, Text, View, FlatList } from 'react-native'
import { Feather } from "@expo/vector-icons"
import OrderItemDetail from './OrderItemDetail.jsx'
import colors from '../utils/global/colors'
import fonts from '../utils/global/fonts'

const OrderItem = ({ order }) => {

    const items = order.items

    return (
        <View style={styles.card}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{order.createdAt}</Text>
                <FlatList
                    data={items}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <OrderItemDetail item={item} />}
                />
                <Text style={styles.text2}>Total: ${order.total}</Text>
            </View>
            <Feather name="search" size={30} />
        </View>
    )
}

export default OrderItem

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.secondary,
        borderWidth: 2,
        margin: 10,
        padding: 10,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        height: 'auto',
        alignItems: "center"
    },
    textContainer: {
        width: "70%"
    },
    text: {
        fontSize: 17,
        fontFamily: fonts.text,
    },
    text2: {
        fontSize: 19,
        fontFamily: fonts.text,
    }
})