import { View, Text, StyleSheet, Pressable } from 'react-native'
import colors from '../utils/global/colors.js'

const ErrorMessage = ({ message, textButton, onRetry }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.errorMessage}>{message}</Text>
            <Pressable style={styles.button} onPress={onRetry}>
                <Text style={styles.textButton}>{textButton}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorMessage: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center',
    },
    button: {
        backgroundColor: colors.title,
        paddingHorizontal: 10,
        paddingVertical: 8,
        margin: 10,
        borderRadius: 5
    },
    textButton: {
        color: "white",
        textAlign: "center",
        fontSize: 18
    }
})

export default ErrorMessage