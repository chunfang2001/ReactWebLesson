import CartIcon from "./CartIcon"

import classes from "./Button.module.css"
import { useContext, useEffect, useState } from "react"
import ItemContext from "../Wrapper/ItemContext"
export default function Button(props){
    const [show,setShow ] = useState(false)
    const cartCtx = useContext(ItemContext)

    useEffect(()=>{
        if(cartCtx.item.length===0){
            return
        }
        setShow(true)
        const time = setTimeout(()=>{
            setShow(false)
        },300)

        return ()=>{
            clearTimeout(time)
        }
    },[cartCtx])
    
    const itemCtx = useContext(ItemContext)

    const number = itemCtx.item.reduce((cur,obj)=>{
        const value = +obj.amount+cur
        return value
    },0)
    return(
        <button className={`${classes['header-button']} ${show?classes['bump']:classes['']}`} onClick={props.onShow}>
            <div className={classes['header-button-icon']}><CartIcon/></div>
            <span className={classes['header-button-label']}>Your Cart</span>
            <span className={classes['header-button-amount']}>{number}</span>
        </button>
    )
}