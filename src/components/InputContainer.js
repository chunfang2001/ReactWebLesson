import React from 'react'
import UserForm from './UserForm'

import style from "./InputContainer.module.css"

export default function InputContainer(props){
    return (
        <div>
            <div className={style["main-container"]}>
                <UserForm onSubmitUser = {props.onSubmitUser}/>
            </div>
        </div>
        
    )
}