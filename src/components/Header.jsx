import { StyleSheet, Text, View } from 'react-native';
import { toCapitalCase } from '../utils/utils.js';
import colors from '../utils/global/colors.js';
import fonts from '../utils/global/fonts.js';

const Header = ({ title = "Ecommerce", styleHeaderItemDetail }) => {

    const displayTitle = title.toString()

    return (
        <View style={[styles.container]}>
            <Text style={[styles.text, styleHeaderItemDetail]}>{toCapitalCase(displayTitle)}</Text>
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
    }
});