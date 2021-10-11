import React, { useEffect, useState } from "react"

export const Context = React.createContext({
    token:null,
    isLogin:false,
    login:(token)=>{},
    logout:()=>{}
}) 

let logoutTimer

const AuthContext = (props)=> {
    const [token,setToken] = useState(localStorage.getItem("token"))
    
    let isLogin = token===null?false:true

    useEffect(()=>{
        if(isLogin){
            let expiredDate = localStorage.getItem("timer")
            let period = expiredDate - new Date().getTime()
            logoutTimer = setTimeout(logout,period)
        }
    },[isLogin])

    

    const loginHandler = (token,expiredPeriod) =>{
        let expiredDate = new Date().getTime()
        expiredDate += expiredPeriod*1000
        localStorage.setItem("token",token)
        localStorage.setItem("timer",expiredDate)
        setToken(token)
    }

    const logout = ()=>{
        localStorage.removeItem("token")
        localStorage.removeItem("timer")
        setToken(null)
        clearInterval(logoutTimer)
    }

    const context = {
        token:token,
        isLogin:isLogin,
        login:loginHandler,
        logout:logout
    }
    return(
    <Context.Provider value={context}>
        {props.children}
    </Context.Provider>
    )
}

export default AuthContext