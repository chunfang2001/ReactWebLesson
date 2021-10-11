import { useContext, useRef } from 'react';
import { useHistory } from 'react-router';
import { Context } from '../../store/AuthContext';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const authCtx = useContext(Context)
  const history = useHistory()
  const passwordRef = useRef()
  const changePasswordHandler = (event)=>{
    event.preventDefault()
    fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCcCNyvk_zd3Wnj6L5X1tel6E1bTSXn3l4",{
      method:"POST",
      body:JSON.stringify({
        idToken:authCtx.token,
        password:passwordRef.current.value,
        returnSecureToken:true
      }),
      header:{
        'Content-Type': 'application/json'
      }
    }).then(res=>{
      if(!res.ok){
        console.log(res)
        throw new Error("Authorization Error")
      }
      return res.json()
    }).then(res=>{
      history.push('/')
    }).catch(err=>{
      alert(err)
    })
  }
  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={passwordRef}/>
      </div>
      <div className={classes.action}>
        <button onClick={changePasswordHandler}>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
