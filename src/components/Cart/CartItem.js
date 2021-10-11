import { useContext } from "react"
import React from "react"
import ItemContext from "../Wrapper/ItemContext"
import classes from "./CartItem.module.css"

function CartItem(props){
    const ItemCtx = useContext(ItemContext)

    const addItem = ()=>{
        ItemCtx.addItem(props.item.item,1)
    }
    const removeItem = ()=>{
        ItemCtx.removeItem(props.item.item,1)
    }
    return(
        <li className={classes['item']}>
            <div className={classes['item-left']}>
                <h2>{props.item.item.name}</h2>
                <div className={classes['item-left-detail']}>
                    <h3>${props.item.item.price}</h3>
                    <span>x{props.item.amount}</span>
                </div>
            </div>
            <div>
                <button className={classes['control-button']} onClick={addItem}>+</button>
                <button className={classes['control-button']} onClick={removeItem}>-</button>
            </div>
            

        </li>
    )
}
export default React.memo(CartItem)