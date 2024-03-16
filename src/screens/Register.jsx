import { StyleSheet, Text, View, Pressable } from 'react-native'
import InputForm from '../components/InputForm'
import SubmitButton from '../components/SubmitButton'
import { useState } from 'react'
import colors from '../utils/global/colors'
import fonts from '../utils/global/fonts'
import { useRegisterMutation } from '../app/services/auth'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/auth/authSlice'
import { registerSchema } from '../utils/validations/authSchema'

const Register = ({ navigation }) => {

    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [errorEmail, setErrorEmail] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("")
    const [triggerRegister] = useRegisterMutation()


    const onSubmit = async () => {
        try {
            registerSchema.validateSync({ email, password, confirmPassword })
            const { data } = await triggerRegister({ email, password })
            dispatch(setUser({ email: data.email, idToken: data.idToken, localId: data.localId }))
        } catch (error) {
            setErrorEmail("")
            setErrorPassword("")
            setErrorConfirmPassword("")
            switch (error.path) {
                case "email":
                    setErrorEmail(error.message)
                    break
                case "password":
                    setErrorPassword(error.message)
                    break
                case "confirmPassword":
                    setErrorConfirmPassword(error.message)
                    break
                default:
                    break
            }
        }
    }

    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <InputForm
                    label="Email"
                    value={email}
                    onChangeText={(t) => setEmail(t)}
                    isSecure={false}
                    error={errorEmail}
                />
                <InputForm
                    label="Password"
                    value={password}
                    onChangeText={(t) => setPassword(t)}
                    isSecure={true}
                    error={errorPassword}
                />
                <InputForm
                    label="Confirmar Password"
                    value={confirmPassword}
                    onChangeText={(t) => setConfirmPassword(t)}
                    isSecure={true}
                    error={errorConfirmPassword}
                />
                <SubmitButton onPress={onSubmit} title="Registrarme" />
                <Text style={styles.sub}>ya tenes una cuenta?</Text>
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