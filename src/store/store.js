import { configureStore } from '@reduxjs/toolkit'
import UISlice from './UISlice'
import cartSlice from './cartSlice'

const store = configureStore({
    reducer:{
        UI:UISlice.reducer,
        cart:cartSlice.reducer
    }
})

export const UIAction = UISlice.actions
export const cartAction = cartSlice.actions
export default store