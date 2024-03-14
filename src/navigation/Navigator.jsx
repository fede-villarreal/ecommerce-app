import { useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './TabNavigator'
import AuthStack from './AuthStack'

const Navigator = () => {

    const user = useSelector((state) => state.auth)

    return (
        <NavigationContainer>
            {user.idToken ? <TabNavigator/> : <AuthStack/>}
        </NavigationContainer>
    )
}

export default Navigator