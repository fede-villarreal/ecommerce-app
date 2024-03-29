import { View, FlatList, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import { useGetOrdersQuery } from '../app/services/orders.js'
import OrderItem from '../components/OrderItem'

const Orders = () => {

    const localId = useSelector((state) => state.auth.localId)
    const { data: orders } = useGetOrdersQuery(localId)

    return (
        <View style={styles.container}>
            <FlatList
                data={orders}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <OrderItem order={item} />}
            />
        </View>
    )
}

export default Orders

const styles = StyleSheet.create({
    container: {
        height: '85%'
    }
})