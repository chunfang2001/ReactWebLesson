import React from 'react'
import Chart from './Chart'
import './ExpenseChart.css'

export default function ExpenseChart(props){

    const allMonth = [
        {month:"Jan", value:0},
        {month:"Feb", value:0},
        {month:"Mar", value:0},
        {month:"Apr", value:0},
        {month:"May", value:0},
        {month:"Jun", value:0},
        {month:"Jul", value:0},
        {month:"Aug", value:0},
        {month:"Sep", value:0},
        {month:"Oct", value:0},
        {month:"Nov", value:0},
        {month:"Dec", value:0}    
    ]

    for(const expense of props.filterYear){
        allMonth[expense.date.getMonth()].value += expense.amount;
    }
    
    const allValue = allMonth.map((month)=>month.value)

    const max = Math.max(...allValue)
    return(
        <div className="expense-chart">
            {allMonth.map((e)=><Chart label={e.month} max={max} value ={e.value}/>)}
        </div>
    )
}