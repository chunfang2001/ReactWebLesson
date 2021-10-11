import React from 'react'

import style from './User.module.css'

export default function User(props){
    return (
        <li className={style['user']}>
            {props.name} ({props.age} years old)
        </li>
    )
}