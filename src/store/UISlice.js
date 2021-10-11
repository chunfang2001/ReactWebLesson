import { createSlice } from '@reduxjs/toolkit'

const UISlice = createSlice({
    name:"UI",
    initialState:{
        showCart:false,
        notification : null
    },
    reducers:{
        changeShowCart(state){
            state.showCart = !state.showCart
        },
        noti(state,action){
            state.notification = {
                title:action.payload.title,
                message:action.payload.message,
                status:action.payload.status
            }
        }
    }
})

export default UISlice 