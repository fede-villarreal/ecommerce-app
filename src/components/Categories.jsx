import { StyleSheet, FlatList } from 'react-native';
import { useGetCategoriesQuery } from '../app/services/shop.js';
import CategoryCard from './CategoryCard.jsx';
import LoadingSpinner from './LoadingSpinner.jsx';
import ErrorMessage from './ErrorMessage.jsx';
import EmptyListComponent from './EmptyListComponent.jsx'

const Categories = ({ navigation }) => {

    const { data: categories, isError, isLoading, isSuccess } = useGetCategoriesQuery()

    const onRetry = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
        })
    }

    if (isLoading) return <LoadingSpinner />
    if (isError) return <ErrorMessage message="¡Ups! Algo salió mal." textButton="Recargar" onRetry={onRetry} />
    if (isSuccess && categories === null) return <EmptyListComponent message="Sin Categorias" />

    return (
        <FlatList
            style={styles.list}
            data={categories}
            keyExtractor={item => item}
            renderItem={({ item }) => (
                <CategoryCard item={item} navigation={navigation} />
            )}
        />
    );
};

export default Categories;

const styles = StyleSheet.create({
    list: {
        height: 80
    }
});