import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { setUser } from '../features/auth/authSlice.js'
import { fetchSession } from '../utils/db/index.js'
import TabNavigator from './TabNavigator'
import AuthStack from './AuthStack'

const Navigator = () => {

    const dispatch = useDispatch()
    const user = useSelector((state) => state.auth)

    useEffect(() => {
        (async () => {
            const session = await fetchSession()
            if (session.rows.length) {
                const user = session.rows._array[0]
                dispatch(setUser(user))
            }
        })()
    }, [])

    return (
        <NavigationContainer>
                {user.idToken ? <TabNavigator /> : <AuthStack />}
        </NavigationContainer>
    )
}

export default Navigator