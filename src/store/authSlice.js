import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
    name:"authentication",
    initialState:{ isAuth:false},
    reducers:{
        login(state){
            state.isAuth = true
        },
        logout(state){
            state.isAuth = false
        }
    }
})

export default authSlice