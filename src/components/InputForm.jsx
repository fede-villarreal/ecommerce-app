import { StyleSheet, Text, View, TextInput } from 'react-native'
import fonts from '../utils/global/fonts'
import colors from '../utils/global/colors.js'


const InputForm = ({ label, value, onChangeText, isSecure, error }) => {


    return (
        <View style={styles.inputContainer}>
            <Text style={styles.titleInput}>{label}</Text>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                style={styles.input}
                secureTextEntry={isSecure}
            />
            {error ? <View><Text style={styles.error}>{error}</Text></View> : null}
        </View>
    )
}


export default InputForm


const styles = StyleSheet.create({
    inputContainer: {
        width: "100%",
    },
    input: {
        width: "90%",
        color: colors.text,
        borderWidth: 0,
        borderBottomWidth: 3,
        borderBottomColor: "white",
        padding: 2,
        fontFamily: fonts.text,
        fontSize: 14,
        marginHorizontal: "5%",
        marginVertical: 10
    },
    titleInput: {
        width: "90%",
        marginHorizontal: "5%",
        fontSize: 16,
        fontFamily: fonts.subtitle,
        color: colors.text
    },
    error: {
        fontSize: 16,
        color: "red",
        fontFamily: fonts.text,
        marginLeft: 20
    }
})