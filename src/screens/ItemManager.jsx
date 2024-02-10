import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import ModalVerification from '../components/ModalVerification.jsx';
import AddItem from '../components/AddItem.jsx';
import ItemList from '../components/ItemList.jsx';
import colors from '../utils/global/colors.js';

const ItemManager = () => {

    // Estados de la lista de items
    const [itemList, setItemList] = useState([])
    const [itemTitle, setItemTitle] = useState("")
    const [itemDescription, setItemDescription] = useState("")

    // Captar texto del input
    const onHandlerChangeTitle = (text) => setItemTitle(text)
    const onHandlerChangeDescription = (text) => setItemDescription(text)

    const addItem = () => {
        setItemList(itemList => [
            ...itemList,
            { id: Math.random().toString(), title: itemTitle, description: itemDescription }
        ])
        setItemTitle('')
        setItemDescription('')
    }

    // Estados necesarios para el modal:
    const [itemSelected, setItemSelected] = useState({})
    const [modalVisible, setModalVisible] = useState(false)

    // Funciones para utilizar el modal:
    const deleteItem = (item) => {
        setItemSelected(item)
        setModalVisible(true)
    }

    const confirmDelete = () => {
        setItemList(itemList.filter(item => item.id !== itemSelected.id))
        setModalVisible(false)
    }

    const cancelDelete = () => {
        setModalVisible(false)
    }

    return (
        <View style={styles.container}>

            <AddItem
                onHandlerChangeTitle={onHandlerChangeTitle}
                itemTitle={itemTitle}
                onHandlerChangeDescription={onHandlerChangeDescription}
                itemDescription={itemDescription}
                addItem={addItem}
            />

            <ItemList
                itemList={itemList}
                deleteItem={deleteItem}
            />

            <ModalVerification
                modalVisible={modalVisible}
                cancelDelete={cancelDelete}
                itemSelected={itemSelected}
                confirmDelete={confirmDelete}
            />

            <StatusBar style="auto" />

        </View>
    );
}

export default ItemManager

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        paddingVertical: 50,
        paddingHorizontal: 10
    }
});