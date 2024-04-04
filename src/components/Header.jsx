import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
import { clearUser } from '../features/auth/authSlice.js';
import { deleteSession } from '../utils/db/index.js';
import { toCapitalCase } from '../utils/utils.js';
import colors from '../utils/global/colors.js';
import fonts from '../utils/global/fonts.js';

const Header = ({ title = "Ecommerce", styleHeaderItemDetail }) => {

    const dispatch = useDispatch()
    const idToken = useSelector((state) => state.auth.idToken)
    const displayTitle = title.toString()

    const onLogout = () => {
        dispatch(clearUser())
        deleteSession()
    }

    return (
        <View style={[styles.container]}>
            <Text style={[styles.text, styleHeaderItemDetail]}>{toCapitalCase(displayTitle)}</Text>
            {idToken && (
                <Pressable style={styles.logoutIcon} onPress={onLogout}>
                    <AntDesign name="logout" size={30} color={colors.title} />
                </Pressable>)}
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        minHeight: 80,
        paddingTop: 15,
        paddingHorizontal: 10,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 40,
        fontFamily: fonts.title,
        color: colors.title
    },
    logoutIcon:{
        position:"absolute",
        right:10,
        bottom:15
    }
});