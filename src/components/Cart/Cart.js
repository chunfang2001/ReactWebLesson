import CartItem from "./CartItem"
import useInput from "../../hooks/use-Input"


import classes from "./Cart.module.css"
import React,{ useContext } from "react"
import ItemContext from "../Wrapper/ItemContext"

const isEmpty = (data) =>{
    return data.trim()!==''
}
  
export default function Cart(props){
    const itemCtx = useContext(ItemContext)

    function order(){
        if(!nameValid||!addressValid||!cityValid||!contactValid||itemCtx.item.length===0){
            return
        }
        const orderData = {
            user:{
                name: name,
                address: address,
                city: city,
                contact : contact
            },
            order:{
                items: itemCtx.item,
                total: itemCtx.total
            }
        }
        sendData(orderData)
        resetName()
        resetAddress()
        resetCity()
        resetContact()
        itemCtx.removeAll()
        props.onNoti()
    }

    const {
        input:name,
        error : nameError,
        Valid: nameValid,
        changeValue:changeName,
        blurValue: blurName,
        resetValue : resetName
    } = useInput(isEmpty);

    const {
        input:address,
        error : addressError,
        Valid: addressValid,
        changeValue:changeAddress,
        blurValue: blurAddress,
        resetValue : resetAddress
    } = useInput(isEmpty);

    const {
        input:city,
        error : cityError,
        Valid: cityValid,
        changeValue:changeCity,
        blurValue: blurCity,
        resetValue : resetCity
    } = useInput(isEmpty);
    const {
        input:contact,
        error : contactError,
        Valid: contactValid,
        changeValue:changeContact,
        blurValue: blurContact,
        resetValue : resetContact
    } = useInput(isEmpty);
    
    const sendData = async (orderData) =>{
        const response = await fetch("https://learning-project-9e8c8-default-rtdb.firebaseio.com/order.json",{
            method:"POST",
            body:JSON.stringify(orderData),
            header:{
                "Content-Type":"application/json"
            }
        })
        const data = response.json;
    }

    const nameClass = nameError ? `${classes['form-control']} ${classes['invalid']}` : `${classes['form-control']}`
    const addressClass = addressError ? `${classes['form-control']} ${classes['invalid']}` : `${classes['form-control']}`
    const cityClass = cityError ? `${classes['form-control']} ${classes['invalid']}` : `${classes['form-control']}`
    const contactClass = contactError ? `${classes['form-control']} ${classes['invalid']}` : `${classes['form-control']}`
    let buttonClass = classes['order-confirm']

    if(!nameValid||!addressValid||!cityValid||!contactValid||itemCtx.item.length===0){
        buttonClass = classes['order-cannotconfirm']
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
                <div>
                    <h2>User info</h2>
                    <div className={classes['divide']}>
                        <div className={nameClass}>
                            <label> Name</label>
                            <input value={name} onChange={changeName} onBlur={blurName}/>
                        </div>
                        {nameError&&<p className={classes['error']}>Please fill in the blank</p>}
                    </div>
                    <div className={classes['divide']}>
                        <div className={addressClass}>
                            <label>Address</label>
                            <input value={address} onChange={changeAddress} onBlur={blurAddress}/>
                        </div>
                        {addressError&&<p className={classes['error']}>Please fill in the blank</p>}
                    </div>
                    <div className={classes['divide']}>
                        <div className={cityClass}>
                            <label>City</label>
                            <input value={city} onChange={changeCity} onBlur={blurCity}/>
                        </div>
                        {cityError&&<p className={classes['error']}>Please fill in the blank</p>}
                    </div>
                    <div className={classes['divide']}>
                        <div className={contactClass}>
                            <label>Contact Number</label>
                            <input value={contact} onChange={changeContact} onBlur={blurContact}/>
                        </div>
                        {contactError&&<p className={classes['error']}>Please fill in the blank</p>}
                    </div>
                </div>
                <div className={classes['order']}>
                    <button className={classes['order-cancel']} onClick={props.onShow}>Cancel</button>
                    <button className={buttonClass} onClick={order}>Add Order</button>
                </div>
            </div>
        </div>
    )
}