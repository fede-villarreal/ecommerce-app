import { View, Text } from 'react-native'
import React from 'react'

const OrderItemDetail = ({ item }) => {
    return (
        <View>
            <Text>- Product: {item.title}, Price: {item.price}, Quantity: {item.quantity}</Text>
        </View>
    )
}

export default OrderItemDetail