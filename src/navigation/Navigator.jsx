import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/Header.jsx'
import Home from '../screens/Home.jsx'
import ItemsCategory from '../screens/ItemsCategory.jsx'
import ItemDetail from '../screens/ItemDetail.jsx'

const Stack = createNativeStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Home'
                screenOptions={({ route }) => {
                    return {
                        header: () => {
                            return <Header title={
                                route.name === 'Home'
                                    ? route.name
                                    : route.name === 'ItemsCategory'
                                        ? route.params.categorySelected
                                        : route.params.itemTitle
                            }
                                styleHeaderItemDetail={
                                    route.name === 'ItemDetail'
                                        ? styles.headerItemDetail
                                        : null
                                }
                            />
                        }
                    }
                }}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="ItemsCategory" component={ItemsCategory} />
                <Stack.Screen name="ItemDetail" component={ItemDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator

const styles = StyleSheet.create({
    headerItemDetail: {
        fontSize: 30,
    }
})