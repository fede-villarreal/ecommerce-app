import { StyleSheet, Text, View, Modal, Pressable } from 'react-native'
import colors from '../utils/global/colors.js'
import fonts from '../utils/global/fonts'


const ModalMessage = ({ text, textButton, onClose, modalVisible }) => {

    return (
        <Modal
            visible={modalVisible}
            transparent={true}
            animationType='fade'
            onRequestClose={onClose}
        >
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.text}>{text}</Text>
                    <Pressable style={styles.button} onPress={onClose}>
                        <Text style={styles.textButton}>{textButton}</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    )
}

export default ModalMessage

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(0,0,0,0.8)",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    content: {
        width: "90%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.background,
        padding: 30,
        gap: 20,
        borderRadius: 5
    },
    text: {
        fontSize: 18,
        color: "white",
        fontFamily: fonts.subtitle
    },
    button: {
        backgroundColor: colors.title,
        paddingHorizontal: 10,
        paddingVertical: 8,
        margin: 10,
        borderRadius: 5
    },
    textButton: {
        color: "white",
        textAlign: "center",
        fontSize: 18
    }
})