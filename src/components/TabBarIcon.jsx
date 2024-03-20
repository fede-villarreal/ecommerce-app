import { StyleSheet, View, Text } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import colors from '../utils/global/colors.js'

const TabBarIcon = ({ title, iconName, focused }) => {
    return (
        <View style={focused ? styles.containerFocused : styles.container}>
            <Entypo name={iconName} size={25} color={focused ? colors.title : colors.text} />
            <Text style={focused ? styles.textFocused : styles.text}>{title}</Text>
        </View>
    )
}

export default TabBarIcon

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    containerFocused: {
        alignItems: 'center',
        borderRadius: 50,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderColor: colors.secondary,
        borderWidth: 2
    },
    text: {
        color: colors.text,
        fontSize: 12
    },
    textFocused: {
        color: colors.title
    }
})