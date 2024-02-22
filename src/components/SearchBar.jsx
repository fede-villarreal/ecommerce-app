import { useState } from 'react';
import { Keyboard, Pressable, StyleSheet, TextInput, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import colors from '../utils/global/colors.js';

const SearchBar = ({ handlerSearchedWord }) => {
    const [input, setInput] = useState('');
    const [regexError, setRegexError] = useState('');

    const handlerInput = (text) => setInput(text);

    const search = () => {
        const regex = /[^a-zA-Z0-9\s\-_]/;
        if (regex.test(input)) {
            setRegexError('Carácteres no válidos: sólo se permiten letras, números, guiones y espacios');
            return;
        }
        setRegexError('');
        handlerSearchedWord(input);
        Keyboard.dismiss();
    };

    const resetSearch = () => {
        handlerSearchedWord('');
        handlerInput('');
        setRegexError('');
    };

    return (
        <View>
            <View style={styles.container}>
                <TextInput
                    placeholder='Buscar'
                    placeholderTextColor={colors.title}
                    value={input}
                    onChangeText={handlerInput}
                    style={styles.input}
                />
                <Pressable onPress={search} style={styles.button}>
                    <AntDesign name='search1' size={30} color={colors.title} />
                </Pressable>
                <Pressable onPress={resetSearch} style={styles.button}>
                    <AntDesign name='closecircle' size={30} color={colors.title} />
                </Pressable>
            </View>
            {regexError && <Text style={styles.error}>{regexError}</Text>}
        </View>
    );
};

export default SearchBar;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    input: {
        flex: 1,
        borderWidth: 2,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        borderColor: colors.secondary,
        marginHorizontal: 5,
        color: colors.title
    },
    button: {
        marginLeft: 5
    },
    error: {
        color: colors.text,
        paddingHorizontal: 10,
        paddingVertical: 5
    }
});