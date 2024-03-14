import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ShopStack from './ShopStack.jsx'
import CartStack from './CartStack.jsx'
import OrdersStack from './OrdersStack.jsx'
import TabBarIcon from '../components/TabBarIcon.jsx'
import colors from '../utils/global/colors.js'

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName='ShopStack'
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
                tabBarHideOnKeyboard: true
            }}
        >
            <Tab.Screen name='ShopStack' component={ShopStack}
                options={{
                    tabBarIcon: ({ focused }) => <TabBarIcon title='Home' iconName='home' focused={focused} />
                }}
            />
            <Tab.Screen name='CartStack' component={CartStack}
                options={{
                    tabBarIcon: ({ focused }) => <TabBarIcon title='Carrito' iconName='shopping-cart' focused={focused} />
                }}
            />
            <Tab.Screen name='OrdersStack' component={OrdersStack}
                options={{
                    tabBarIcon: ({ focused }) => <TabBarIcon title='Ordenes' iconName='list' focused={focused} />
                }}
            />
        </Tab.Navigator>
    )
}

export default TabNavigator

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.primary,
        shadowColor: colors.secondary,
        elevation: 4,
        position: 'absolute',
        bottom: 15,
        left: 20,
        right: 20,
        borderRadius: 15,
        height: 70,
    }
})