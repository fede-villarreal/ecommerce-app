import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { useDispatch } from 'react-redux'
import { addItem } from '../features/cartCounter/cartCounterSlice.js'
import colors from '../utils/global/colors.js'
import fonts from '../utils/global/fonts.js'
import { useGetProductByIdQuery } from '../app/services/shop.js'

const ItemDetail = ({ route }) => {

    const dispatch = useDispatch()

    const {itemId} = route.params

    const {data: product, isLoading} = useGetProductByIdQuery(itemId)

    if(isLoading) return null

    return (
        <View style={styles.container}>
            <View style={styles.content} >
                <Image
                    style={styles.image}
                    source={{ uri: product?.images ? product.images[0] : null }}
                    resizeMode='cover'
                />
                <View style={styles.containerText} >
                    <Text style={styles.title}>{product.title}</Text>
                    <Text style={styles.description}>{product.description}</Text>
                </View>
                <View style={styles.containerPrice} >
                    <Text style={styles.price}>$ {product.price}</Text>
                    <Pressable style={styles.buyNow} onPress={() => dispatch(addItem(product))}>
                        <Text style={styles.buyNowText}>Añadir al carrito</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default ItemDetail

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        justifyContent: "start",
        alignItems: "center"
    },
    content: {
        width: "100%"
    },
    image: {
        width: "80%",
        height: 200
    },
    containerText: {
        gap: 25,
        paddingHorizontal: 5,
        paddingVertical: 25
    },
    containerPrice: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginVertical: 10
    },
    title: {
        fontSize: 30,
        fontFamily: fonts.subtitle
    },
    description: {
        fontSize: 18,
        fontFamily: fonts.text
    },
    price: {
        fontSize: 30
    },
    buyNow: {
        backgroundColor: colors.secondary,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5
    },
    buyNowText: {
        color: colors.text,
        fontSize: 18
    }
})