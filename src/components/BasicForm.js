import React, { useEffect, useState } from "react";
import useInput from '../hooks/useInput'

const BasicForm = (props) => {
  
  const [buttonClickable, setButtonClickable] = useState(false)

  const checkFName = (value)=>{
    return value.trim() !==''
  }
  const checkLName = (value)=>{
    return value.trim() !==''
  }
  const checkEmail = (value)=>{
    return value.trim().includes('@')
  }

  const {
    value : fName,
    valueIsValid: fNameIsValid,
    checkValueTouched : fNameIsTouched,
    changeValue : changeFName,
    hasError : fNameError,
    resetValue : resetFName
  } = useInput(checkFName)

  const {
    value : lName,
    valueIsValid: lNameIsValid,
    checkValueTouched : lNameIsTouched,
    changeValue : changeLName,
    hasError : lNameError,
    resetValue : resetLName
  } = useInput(checkLName)

  const {
    value : email,
    valueIsValid: emailIsValid,
    checkValueTouched : emailIsTouched,
    changeValue : changeEmail,
    hasError : emailError,
    resetValue : resetEmail
  } = useInput(checkEmail)

  const fNameClass = fNameError ? `form-control invalid` : `form-control`
  const lNameClass = lNameError ? `form-control invalid` : `form-control`
  const EmailClass = emailError ? `form-control invalid` : `form-control`

  useEffect(()=>{
    setButtonClickable(fNameIsValid && lNameIsValid && emailIsValid)
  },[fNameIsValid,lNameIsValid,emailIsValid])
  
  const buttonClass = buttonClickable ? '': 'button-disabled'
  const submitForm = (e)=>{
    e.preventDefault()
    if(!buttonClickable){
      console.log('caot')
      return
    }else{
      console.log("submitting")
      resetEmail()
      resetLName()
      resetFName()
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
          onChange={changeFName}
          onBlur={fNameIsTouched}/>
        </div>
        <div className={lNameClass}>
          <label htmlFor='name'>Last Name</label>
          <input 
          type='text' 
          id='name' 
          value = {lName} 
          onChange={changeLName}
          onBlur={lNameIsTouched}/>
        </div>
      </div>
      <div className={EmailClass}>
        <label htmlFor='name'>E-Mail Address</label>
        <input 
        type='text' 
        id='name' 
        value = {email} 
        onChange={changeEmail}
        onBlur={emailIsTouched}/>
      </div>
      <div className='form-actions'>
        <button className={buttonClass}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
