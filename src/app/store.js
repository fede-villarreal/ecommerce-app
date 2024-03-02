import { configureStore } from '@reduxjs/toolkit'
import cartCunterReducer from '../features/cartCounter/cartCounterSlice.js'

export const store = configureStore({
    reducer: {
        cartCounter: cartCunterReducer,
    },
})