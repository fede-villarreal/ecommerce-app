import { StyleSheet, FlatList } from 'react-native'
import categories from '../utils/data/categories.json'
import CategoryCard from './CategoryCard.jsx'

const Categories = () => {
    return (
        <FlatList
            style={styles.list}
            data={categories}
            keyExtractor={item => item}
            renderItem={({ item }) => (
                <CategoryCard item={item} />
            )}
        />
    )
}

export default Categories

const styles = StyleSheet.create({
    list: {
        marginBottom: 100
    }
})