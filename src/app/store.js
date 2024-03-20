import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { authApi } from './services/auth'
import { shopApi } from './services/shop.js'
import { profileApi } from './services/profile.js'
import authReducer from '../features/auth/authSlice'
import cartCounterReducer from '../features/cartCounter/cartCounterSlice.js'

export const store = configureStore({
    reducer: {
        cartCounter: cartCounterReducer,
        auth: authReducer,
        [shopApi.reducerPath]: shopApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [profileApi.reducerPath]: profileApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shopApi.middleware,authApi.middleware,profileApi.middleware),
})

setupListeners(store.dispatch)