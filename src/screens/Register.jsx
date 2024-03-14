import { useState } from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import { useDispatch } from 'react-redux'
import InputForm from '../components/InputForm'
import SubmitButton from '../components/SubmitButton'
import { useRegisterMutation } from '../app/services/auth'
import { setUser } from '../features/auth/authSlice'
import colors from '../utils/global/colors'
import fonts from '../utils/global/fonts'

const Register = ({ navigation }) => {

    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [triggerRegister] = useRegisterMutation()


    const onSubmit = async () => {
        const { data } = await triggerRegister({ email, password })
        dispatch(setUser({ email: data.email, idToken: data.idToken }))
    }

    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <InputForm
                    label="Email"
                    value={email}
                    onChangeText={(t) => setEmail(t)}
                    isSecure={false}
                    error=""
                />
                <InputForm
                    label="Password"
                    value={password}
                    onChangeText={(t) => setPassword(t)}
                    isSecure={true}
                    error=""
                />
                <InputForm
                    label="Confirmar Password"
                    value={confirmPassword}
                    onChangeText={(t) => setConfirmPassword(t)}
                    isSecure={true}
                    error=""
                />
                <SubmitButton onPress={onSubmit} title="Registrarme" />
                <Text style={styles.sub}>¿Ya tienes una cuenta?</Text>
                <Pressable onPress={() => navigation.navigate("Login")} >
                    <Text style={styles.subLink}>Incio de sesion</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    container: {
        width: "90%",
        backgroundColor: colors.primary,
        gap: 15,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 20
    },
    sub: {
        fontSize: 15,
        fontFamily: fonts.subtitle,
        marginTop: 20
    },
    subLink: {
        fontSize: 15,
        fontFamily: fonts.text,
        color: colors.text,
        padding: 10,
        borderRadius: 5,
        backgroundColor: colors.secondary
    }
})