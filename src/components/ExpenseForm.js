import "./ExpenseForm.css"
import React,{ useState } from 'react'

export default function ExpenseForm(props){
    const [data, setData] = useState({
        id: Math.random,
        title : '',
        amount: '',
        date : {}
    })

    const handleTitle = (e)=>{
        setData(prev => {return {...prev,title:e.target.value}})
    }
    const handleAmount = (e)=>{
        setData(prev => {return {...prev,amount:e.target.value}})
    }
    const handleDate = (e)=>{
        setData(prev => {return {...prev,date:new Date(e.target.value)}})
    }
    const submitForm = (e)=>{
        e.preventDefault()
        props.onAddExpense(data)
        props.onClickStatus()
        setData({
            title : '',
            amount: '',
            date : ''
        })
    }
    
    return(
        <form className="expense-form">
            <div className="form-arr">
                <label>Title : </label>
                <input value={data.title} type="text" onChange={handleTitle}/>
            </div>
            <div className="form-arr">
                <label>Amount : </label>
                <input value={data.amount} type="number" min="0.01" step="0.01" onChange={handleAmount}/>
            </div>
            <div className="form-arr">
                <label>Date : </label>
                <input type="date" min="2019-01-01" max="2022-12-31" onChange={handleDate}/>
            </div>
            <div className="form-btn-loc">
                <button className="form-btn" onClick={submitForm}>Add New Expense</button>
            </div>
        </form>
    )
}