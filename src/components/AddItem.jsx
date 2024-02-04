import { StyleSheet, TextInput, View, Button } from 'react-native'

const AddItem = ({onHandlerChangeTitle, itemTitle, onHandlerChangeDescription, itemDescription, addItem}) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder='Agregar titulo del item'
                style={styles.input}
                onChangeText={onHandlerChangeTitle}
                value={itemTitle}
                maxLength={25}
            />
            <TextInput
                placeholder='Agregar descripcion del item'
                style={styles.input}
                onChangeText={onHandlerChangeDescription}
                value={itemDescription}
                multiline
                numberOfLines={4}
            />
            <Button title='ADD' onPress={addItem} />
        </View>
    )
}

export default AddItem

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        marginHorizontal: 10
    },
    input: {
        width: '100%',
        borderColor: 'grey',
        padding: 10,
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 10
    },
})