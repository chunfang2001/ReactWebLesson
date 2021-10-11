import "./NewExpense.css"
import React,{ useState } from "react"
import ExpenseForm from "./ExpenseForm"

export default function NewExpense(props){
    const[status,setStatus] = useState(false)
    const clickStatus =()=>{
        if(status===true){
            setStatus(false)
        }else{
            setStatus(true)
        }
    }  
    let item = <ExpenseForm onAddExpense={props.onAddExpense} onClickStatus={clickStatus}/>
    
    if(status===false){
        item =  <div className="expense">
                    <button onClick={clickStatus} className="expense-btn">Add new Expense</button>
                </div>
    }
    return(
        <div>
            {item}
        </div>
    ) 
}