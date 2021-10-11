import { useState } from 'react';
import ReactDOM from 'react-dom';
import Cart from '../Cart/Cart';

import classes from "./Modal.module.css"

function Backdrop(props){
    return(
        <div className={classes['backdrop']} onClick={props.onShow}></div>
    )
}

function Success(props){
    return(
        <div className={classes['success']} onClick={props.onShow}>
            <p>The order is successful added</p>
        </div>
    )
}

export default function Modal(props){
    const [showNotification,setShowNotification] = useState(false)

    function show(){
        props.onShow()
        closeNotification()
    }

    const closeNotification = ()=>{
        setShowNotification(false)
    }

    const sNotification = ()=>{
        setShowNotification(true)
    }

    return (
        <>
            {ReactDOM.createPortal(<Backdrop onShow={show}/>,document.getElementById("backdrop"))}
            {!showNotification&&ReactDOM.createPortal(<Cart onShow={props.onShow} onNoti={sNotification}/>,document.getElementById("backdrop"))}
            {showNotification&&ReactDOM.createPortal(<Success onShow={show}/>,document.getElementById("backdrop"))}
        </>
    )
}