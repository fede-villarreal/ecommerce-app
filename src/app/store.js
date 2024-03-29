import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { authApi } from './services/auth'
import { shopApi } from './services/shop.js'
import { profileApi } from './services/profile.js'
import { ordersApi } from './services/orders.js'
import authReducer from '../features/auth/authSlice'
import cartReducer from '../features/cart/cartSlice.js'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        auth: authReducer,
        [shopApi.reducerPath]: shopApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [profileApi.reducerPath]: profileApi.reducer,
        [ordersApi.reducerPath]: ordersApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shopApi.middleware, authApi.middleware, profileApi.middleware, ordersApi.middleware),
})

setupListeners(store.dispatch)