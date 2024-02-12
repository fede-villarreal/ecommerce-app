import { Pressable, StyleSheet, Text, View } from 'react-native';
import colors from '../utils/global/colors.js';
import { toCapitalCase } from '../utils/utils.js';
import fonts from '../utils/global/fonts.js';

const CategoryCard = ({ item, selectCategory }) => {
    return (
        <Pressable onPress={() => selectCategory(item)}>
            <View style={styles.container}>
                <Text style={styles.text}>{toCapitalCase(item)}</Text>
            </View>
        </Pressable>
    );
};

export default CategoryCard;

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
        fontSize: 20,
        color: colors.text,
        fontFamily: fonts.subtitle
    }
});