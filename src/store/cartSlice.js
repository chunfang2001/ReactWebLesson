import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        item:[],
        changed :false
    },
    reducers:{
        replacedItem(state,action){
            state.item = action.payload.item
        },
        addItem(state,action){
            let found = false
            state.changed = true
            state.item.map((item)=>{
                if(item.title === action.payload.title){
                    found = true
                    item.quantity+=1
                    item.total = item.total+action.payload.price
                }
            })
            if(!found){
                state.item = state.item.concat({
                    title:action.payload.title,
                    price:action.payload.price,
                    quantity:1,
                    total:action.payload.price
                })
            }
        },
        removeItem(state,action){
            state.changed = true
            state.item.map((item)=>{
                if(item.title === action.payload.title){
                    item.quantity-=1
                    item.total = item.total-action.payload.price
                }
            })
            state.item = state.item.filter((item)=>{
                return item.quantity!==0
            })
        }
    }
})

export default cartSlice