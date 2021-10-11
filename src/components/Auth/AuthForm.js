import { useContext, useRef, useState } from 'react';
import { useHistory } from 'react-router';
import { Context } from '../../store/AuthContext';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const history = useHistory()
  const emailRef = useRef()
  const passwordRef = useRef()
  const authCtx = useContext(Context)

  const submitForm = (event)=>{
    event.preventDefault()
    let url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCcCNyvk_zd3Wnj6L5X1tel6E1bTSXn3l4"
    if(isLogin){
      url="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCcCNyvk_zd3Wnj6L5X1tel6E1bTSXn3l4"
    }
    fetch(url,{
      method:"POST",
      body:JSON.stringify({
        email:emailRef.current.value,
        password:passwordRef.current.value,
        returnSecureToken:true
      }),
    }).then(res=>{
      if(!res.ok){
        throw new Error("Authorization failed")
      }
      return res.json()
    }).then(res=>{
      authCtx.login(res.idToken,res.expiresIn)
      history.replace("/")
    }).catch(err=>{
      alert(err)
    })
    emailRef.current.value = ""
    passwordRef.current.value = ""
  }

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
    
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordRef}/>
        </div>
        <div className={classes.actions}>
          <button onClick={submitForm} type="submit">{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
