import CartItem from "./CartItem"

import classes from "./Cart.module.css"
import { useContext } from "react"
import ItemContext from "../Wrapper/ItemContext"

export default function Cart(props){
    const itemCtx = useContext(ItemContext)

    function order(){
        console.log("ordering")
    }
    
    return (
        <div className={classes['setCenter']}>
            <div className={classes['cart']}>
                <div>
                    {itemCtx.item.map((item)=>{
                        return <CartItem key={item.item.id} item={item}/>
                    })}
                </div>
                <div className={classes['total']}>
                    <h2>Total Amount</h2>
                    <h2>${itemCtx.total}</h2>
                </div>
                <div className={classes['order']}>
                    <button className={classes['order-cancel']} onClick={props.onShow}>Cancel</button>
                    <button className={classes['order-confirm']} onClick={order}>Add Order</button>
                </div>
            </div>
        </div>
    )
}