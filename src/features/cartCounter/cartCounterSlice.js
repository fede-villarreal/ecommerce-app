import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    total: 0
}

export const cartCounterSlice = createSlice({
    name: 'cartCounter',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const existingItem = state.items.some((item)=> item.id === action.payload.id)
            if(!existingItem){
                state.items = [...state.items, {...action.payload, quantity:1}]
            }else{
                state.items = state.items.map((item)=>{
                    if(item.id === action.payload.id){
                        return {...item,quantity : item.quantity + 1}
                    }
                    return item
                })
            }
            
            state.total = state.items.reduce((acc,item)=> acc = acc + (item.price * item.quantity),0)
        },
        deleteItem: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload)
            state.total = state.items.reduce((acc,item)=> acc = acc + (item.price * item.quantity),0)
        }
    },
})

export const { addItem, deleteItem } = cartCounterSlice.actions

export default cartCounterSlice.reducer