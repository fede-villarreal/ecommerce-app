import { StyleSheet, Text, View, Image } from 'react-native'
import AddButton from '../components/AddButton'
import { useSelector } from 'react-redux'
import { useGetImageQuery } from '../app/services/profile'
import fonts from '../utils/global/fonts.js'
import colors from '../utils/global/colors.js'

const Profile = ({ navigation }) => {
    const localId = useSelector((state) => state.auth.localId)
    const email = useSelector((state) => state.auth.email)
    const { data } = useGetImageQuery(localId)
    return (
        <View style={styles.container}>
            <Text style={styles.user}>Usuario: {email}</Text>
            <Image
                source={data ? { uri: data.image } : require("../../assets/user.png")}
                style={styles.image}
                resizeMode='cover'
            />
            <AddButton title={"Agregar Imagen de perfil"} onPress={() => navigation.navigate("ImageSelector")} />
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    user: {
        fontSize: 18,
        fontFamily: fonts.subtitle,
        marginBottom: 20,
        padding: 10,
        borderRadius: 10,
        backgroundColor: colors.title,
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 10
    }
})