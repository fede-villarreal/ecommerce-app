import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { authApi } from './services/auth'
import { shopApi } from './services/shop.js'
import authReducer from '../features/auth/authSlice'
import cartCunterReducer from '../features/cartCounter/cartCounterSlice.js'

export const store = configureStore({
    reducer: {
        cartCounter: cartCunterReducer,
        auth: authReducer,
        [shopApi.reducerPath]: shopApi.reducer,
        [authApi.reducerPath]: authApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shopApi.middleware),
})

setupListeners(store.dispatch)