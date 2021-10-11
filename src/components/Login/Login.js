import React, { useEffect, useReducer, useState } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (state,action)=>{
  if(action.type==="input"){
    return {value:action.value,isValid: action.value.trim().includes('@')}
  }
  if(action.type==="input-blur"){
    return {value:state.value,isValid : state.value.trim().includes('@')}
  }
  return {value:"",isValid:false};
}

const passReducer = (state,action) =>{
  if(action.type==="input"){
    return {value:action.value,isValid:action.value.trim().length>6}
  }
  if(action.type==="input-blur"){
    return {value:state.value,isValid:state.value.trim().length>6}
  }
  return {value:"",isValid:false}
}
const Login = (props) => {
  const [emailState,dispatchEmail] = useReducer(emailReducer,{
    value:"",
    isValid:null
  })

  const [passState,dispatchPass] = useReducer(passReducer,{
    value:"",
    isValid:null
  })
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const { isValid: emailValid} = emailState
  const { isValid: passValid} = passState

  useEffect(()=>{
    const identifier = setTimeout(()=>{
      console.log("effect")
      setFormIsValid(
        emailValid && passValid
      );
    },500)
    console.log(formIsValid)
    return ()=>{
      console.log("cleanup")
      clearTimeout(identifier)
    }
  },[emailValid,passValid])

  const emailChangeHandler = (event) => {
    dispatchEmail({type:"input",value:event.target.value})

    // setFormIsValid(
    //   emailState.value.trim().includes('@') && passState.value.trim().length > 6
    // )
  };

  const passwordChangeHandler = (event) => {
    dispatchPass({type:"input",value:event.target.value})

    // setFormIsValid(
    //   emailState.value.trim().includes('@') && passState.value.trim().length > 6
    // )
  };

  const validateEmailHandler = () => {
    dispatchEmail({type:"input-blur"})
  };

  const validatePasswordHandler = () => {
    dispatchPass({type:"input-blur"})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
