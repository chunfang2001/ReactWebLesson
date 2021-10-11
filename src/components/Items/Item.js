import { useContext, useRef } from "react"
import ItemContext from "../Wrapper/ItemContext"
import Input from "./Input"

import classes from "./Item.module.css"

export default function Item(props){
    const number = useRef()
    const itemCtx = useContext(ItemContext)

    const submitForm = (e)=>{
        e.preventDefault()
        itemCtx.addItem(props.item,number.current.value)
    }
    return (
        <div className={classes['itemBox']}>
            <div className={classes['item-left-part']}>
                <h2>{props.name}</h2>
                <p>{props.description}</p>
                <h3>${props.price}</h3>
            </div>
            <form onSubmit={submitForm}>
                <div className={classes['number']}>
                    <span>Amount</span>
                    <Input char={{
                        type:"number",
                        min:1,
                        step:1,
                        defaultValue:1
                    }}
                    ref={number}/>
                </div>
                <div className={classes['button-position']}>
                <button type="submit" className={classes['button']}>+ Add</button>
                </div>  
            </form>
        </div>
    )
}