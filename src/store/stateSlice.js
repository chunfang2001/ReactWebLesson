import { createSlice } from "@reduxjs/toolkit"
import { defaultMemoize } from "reselect"

const stateSlice = createSlice({
    name: 'counter',
    initialState: {counter : 0, showCounter:true},
    reducers:{
        increment(state){
            state.counter = state.counter+1
        },
        decrement(state){
            state.counter = state.counter-1
        },
        increase(state,action){
            state.counter = state.counter+action.payload
        },
        toggle(state){
            state.showCounter = !state.showCounter
        }
    }
})

export default stateSlice