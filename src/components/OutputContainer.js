import React from 'react'
import User from './User'
import style from "./OutputContainer.module.css"

export default function OutputContainer(props){
    if(props.userlist.length===0){
        return (
            <div></div>
        ) 
    }
    return(
        <ul className={style["output-con"]}>
            {props.userlist.map((user)=>
                <User name={user.name} age = {user.age} key={user.id}/>
            )}     
        </ul>
    )
}