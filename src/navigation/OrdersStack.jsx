import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/Header.jsx'
import Orders from '../screens/Orders.jsx'

const Stack = createNativeStackNavigator();

const OrdersStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Orders'
            screenOptions={() => {
                return {
                    header: () => {
                        return <Header title='Ordenes' />
                    }
                }
            }}
        >
            <Stack.Screen name='Orders' component={Orders} />
        </Stack.Navigator>
    )
}

export default OrdersStack