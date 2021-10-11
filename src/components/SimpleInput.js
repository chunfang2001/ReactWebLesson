import React, { useEffect, useState } from "react";

const SimpleInput = (props) => {
  
  const [fNameIsTouch, setFNameIsTouch] = useState(false)
  const [lNameIsTouch, setLNameIsTouch] = useState(false)
  const [emailIsTouch, setEmailIsTouch] = useState(false)
  const [buttonClickable, setButtonClickable] = useState(false)

  const [fName, setFName] = useState('')
  const [lName, setLName] = useState('')
  const [email, setEmail] = useState('')

  const checkFName = () =>{
    setFNameIsTouch(true)
  }

  const checkLName = () =>{
    setLNameIsTouch(true)
  }

  const checkEmail = ()=>{
    setEmailIsTouch(true)
  } 
  const fNameIsValid = fName.trim()!==''
  const lNameIsValid = lName.trim()!==''
  const emailIsValid = email.trim().includes('@')

  const fNameClass = !fNameIsValid && fNameIsTouch ? `form-control invalid` : `form-control`
  const lNameClass = !lNameIsValid && lNameIsTouch ? `form-control invalid` : `form-control`
  const EmailClass = !emailIsValid && emailIsTouch ? `form-control invalid` : `form-control`

  useEffect(()=>{
    setButtonClickable(fNameIsValid && lNameIsValid && emailIsValid)
    console.log('h')
  },[fNameIsValid,lNameIsValid,emailIsValid])
  
  const buttonClass = buttonClickable ? '': 'button-disabled'
  const submitForm = (e)=>{
    e.preventDefault()
    if(!buttonClickable){
      console.log('cannot')
      return
    }else{
      console.log("submitting")
    }
  }

  return (
    <form onSubmit={submitForm}>
      <div className='control-group'>
        <div className={fNameClass}>
          <label htmlFor='name'>First Name</label>
          <input 
          type='text' 
          id='name' 
          value = {fName} 
          onChange={(e)=>{setFName(e.target.value)}}
          onBlur={checkFName}/>
        </div>
        <div className={lNameClass}>
          <label htmlFor='name'>Last Name</label>
          <input 
          type='text' 
          id='name' 
          value = {lName} 
          onChange={(e)=>{setLName(e.target.value)}}
          onBlur={checkLName}/>
        </div>
      </div>
      <div className={EmailClass}>
        <label htmlFor='name'>E-Mail Address</label>
        <input 
        type='text' 
        id='name' 
        value = {email} 
        onChange={(e)=>{setEmail(e.target.value)}}
        onBlur={checkEmail}/>
      </div>
      <div className='form-actions'>
        <button className={buttonClass}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
