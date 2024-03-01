import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/Header.jsx'
import Cart from '../screens/Cart.jsx'

const Stack = createNativeStackNavigator();

const CartStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Cart'
            screenOptions={() => {
                return {
                    header: () => {
                        return <Header title='Carrito' />
                    }
                }
            }}
        >
            <Stack.Screen name='Cart' component={Cart} />
        </Stack.Navigator>
    )
}

export default CartStack