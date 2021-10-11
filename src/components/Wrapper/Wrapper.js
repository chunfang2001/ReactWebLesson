import { useReducer } from "react";
import ItemContext from "./ItemContext";

const INIT = {
    item:[],
    total:0
}

const cartReducer = (state,action)=>{
    if(action.type==="ADD"){
        let found = false
        const num2 = +action.amount
        const newValue = state.item.map((obj)=>{
            if(obj.item===action.item){
                found= true
                const n1 = +action.amount
                return {item:obj.item,amount:+obj.amount+n1}
            }else{
                return {item:obj.item,amount:+obj.amount}
            }
        })
        let newTotal = (+state.total+num2*action.item.price).toFixed(2)
        if(found){
            return {item:newValue,total:newTotal}
        }else{
            const newItem = {item:action.item,
            amount:+action.amount}
            return {item:[...state.item,newItem],total:newTotal}
        }
    }else if(action.type==="REMOVE"){
        let found = false
        let newTotal = state.total
        let fil
        const newValue = state.item.map((item)=>{
            if(item.item===action.item){
                const num = item.amount-1;
                newTotal -= item.item.price;
                if(num===0){
                    fil = item.item
                }
                return {item:item.item,amount:num}
            }else{
                return item
            }
        })
        const a = newValue.filter(i => i.item !==fil)
        newTotal = newTotal.toFixed(2)
        return{item:a,total:newTotal}
    }else if(action.type==="REMOVEALL"){
        return {
            item:[],total:0
        }
    }
    return {item:[],total:0}
}

export default function Wrapper(props){
    const [cartItem , dispatchCart] = useReducer(cartReducer,INIT)
    
    const add = (item,amount)=>{
        dispatchCart({type:"ADD",item:item,amount:amount})
    }
    const remove = (item,amount)=>{
        dispatchCart({type:"REMOVE",item:item,amount:amount})
    }
    const removeAll = ()=>{
        dispatchCart({type:"REMOVEAll"})
    }

    const ItemCtx = {
        item:cartItem.item,
        total:cartItem.total,
        addItem:add,
        removeItem:remove,
        removeAll:removeAll
    }
    
    return(
        <ItemContext.Provider value={ItemCtx}>
            {props.children}
        </ItemContext.Provider>
    )
}