import { FlatList } from 'react-native';
import categories from '../utils/data/categories.json';
import CategoryCard from './CategoryCard.jsx';

const Categories = ({navigation}) => {
    return (
        <FlatList
            data={categories}
            keyExtractor={item => item}
            renderItem={({ item }) => (
                <CategoryCard item={item} navigation={navigation}/>
            )}
        />
    );
};

export default Categories;