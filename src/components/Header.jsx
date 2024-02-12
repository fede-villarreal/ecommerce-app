import { StyleSheet, Text, View } from 'react-native';
import colors from '../utils/global/colors.js';
import { toCapitalCase } from '../utils/utils.js';
import fonts from '../utils/global/fonts.js';

const Header = ({ title = "Ecommerce" }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{toCapitalCase(title)}</Text>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        height: 100,
        paddingTop: 25,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 40,
        fontFamily: fonts.title,
        color: colors.title
    }
});