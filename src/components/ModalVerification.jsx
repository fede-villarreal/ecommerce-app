import { StyleSheet, Text, View, Modal, Button } from 'react-native'

const ModalVerification = ({modalVisible, cancelDelete, itemSelected, confirmDelete}) => {
    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={modalVisible}
            onRequestClose={cancelDelete}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text>¿Está seguro que quiere eliminar el item: {itemSelected.title}?</Text>
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title='Sí' onPress={confirmDelete} />
                        </View>
                        <View style={styles.button}>
                            <Button title='No' onPress={cancelDelete} />
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default ModalVerification

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    button: {
        width: '30%',
        margin: 10
    }
})