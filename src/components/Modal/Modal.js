import ReactDOM from 'react-dom';
import Cart from '../Cart/Cart';

import classes from "./Modal.module.css"

function Backdrop(props){
    return(
        <div className={classes['backdrop']} onClick={props.onShow}>a</div>
    )
}

export default function Modal(props){
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onShow={props.onShow}/>,document.getElementById("backdrop"))}
            {ReactDOM.createPortal(<Cart onShow={props.onShow}/>,document.getElementById("backdrop"))}
        </>
    )
}