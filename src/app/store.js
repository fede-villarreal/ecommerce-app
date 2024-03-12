import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import cartCunterReducer from '../features/cartCounter/cartCounterSlice.js'
import { shopApi } from './services/shop.js'

export const store = configureStore({
    reducer: {
        cartCounter: cartCunterReducer,
        [shopApi.reducerPath]: shopApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shopApi.middleware),
})

setupListeners(store.dispatch)