import React from 'react';
import ReactDOM from 'react-dom';

import style from './Error.module.css'

function Notification(props){
    return (
        <>
            <div className={style["block-background"]}></div>
            <div className={style['error-box']}>
                <header className={style["box-header"]}>Error</header>
                <div className={style["box-message"]}>{props.message}</div>
                <div className={style["box-foot"]}>
                    <button className={style["box-btn"]} onClick={props.onHandleError}>Confirm</button>
                </div>
            </div>
        </>
    )
}

const Error=(props)=>{
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Notification message={props.message} onHandleError={props.onHandleError}/>,document.getElementById("notification"))}
        </React.Fragment>
    )
}
export default Error