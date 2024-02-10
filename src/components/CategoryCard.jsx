import { StyleSheet, View, Text } from 'react-native'
import colors from '../utils/global/colors.js'
import { toCapitalCase } from '../utils/utils.js'

const CategoryCard = ({ item }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{toCapitalCase(item)}</Text>
        </View>
    )
}

export default CategoryCard

const styles = StyleSheet.create({
    container: {
        width: '80%',
        backgroundColor: colors.secondary,
        marginHorizontal: '10%',
        marginVertical: 10,
        padding: 20,
        alignItems: 'center',
        borderRadius: 10,
        elevation: 10
    },
    text: {
        fontSize: 15,
        color: colors.text
    }
})