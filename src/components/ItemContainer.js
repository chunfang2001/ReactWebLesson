import "./ItemContainer.css"
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpenseChart from "./ExpenseChart";

function ItemContainer(props){
    const [year,setYear] = useState('2020')

    const handleYear = (y) =>{
        setYear(y)           
    }

    const filterYear = props.items.filter((item)=>{
        if(item.date.getFullYear().toString()===year){
            return item;
        }
    })

    let message = <p>No expense here</p>
    if(filterYear.length>0){
        message =filterYear.map((item)=>
            <ExpenseItem 
            key = {item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}/>
        )
    }

    return (
        <div className ="expenses"> 
            <ExpensesFilter onChangeYear= {handleYear} year={year}/>
            <ExpenseChart filterYear={filterYear}/>
            {message}
        </div>
    )
}

export default ItemContainer;