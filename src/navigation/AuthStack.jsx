import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/Header.jsx';
import Login from '../screens/Login.jsx';
import Register from '../screens/Register.jsx';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Login'
            screenOptions={({route}) => {
                return {
                    header: () => {
                        return <Header title={route.name === 'Login' ? 'Iniciar sesión' : 'Registrarse'} />
                    }
                }
            }}
        >
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} />
        </Stack.Navigator>
    )
}

export default AuthStack