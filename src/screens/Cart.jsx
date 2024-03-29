import { StyleSheet, FlatList, Text, View, Pressable } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { usePostOrderMutation } from '../app/services/orders.js'
import { deleteCart } from '../features/cart/cartSlice.js'
import CartItem from '../components/CartItem.jsx'
import fonts from '../utils/global/fonts.js'
import colors from '../utils/global/colors.js'

const Cart = ({navigation}) => {

    const dispatch = useDispatch()
    const cart = useSelector((state)=> state.cart)
    const localId = useSelector((state) => state.auth.localId)
    const [triggerAddOrder] = usePostOrderMutation()

    const handlerAddOrder = () => {
        const createdAt = new Date().toLocaleString()
        const order = {
            createdAt,
            ...cart
        }
        triggerAddOrder({localId, order})
        dispatch(deleteCart())
        navigation.navigate('OrdersStack')
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={cart.items}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <CartItem item={item} />}
            />
            <View style={styles.confirmContainer}>
                <Pressable onPress={handlerAddOrder}>
                    <Text style={styles.confirmText}>Confirmar</Text>
                </Pressable>
                <Text style={styles.confirmText}>Total: $ {cart.total}</Text>
            </View>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        marginBottom: 130
    },
    confirmContainer: {
        flexDirection: "row",
        backgroundColor: colors.primary,
        padding: 25,
        justifyContent: "space-between",
    },
    confirmText: {
        fontFamily: fonts.subtitle,
        fontSize: 18,
        color: colors.title
    }
})