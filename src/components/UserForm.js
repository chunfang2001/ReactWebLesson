import React, { useRef, useState } from 'react'
import Error from './Error'

import style from './UserForm.module.css'

export default function UserForm(props){
    // const[name,setName] = useState('')
    // const[age,setAge] = useState('')
    const[status,setStatus] = useState(true);
    const[message,setMessage] = useState('');
    const nameRef = useRef()
    const ageRef = useRef()

    // const handleName = (e)=>{
    //     setName(e.target.value)
    // }
    // const handleAge = (e)=>{
    //     setAge(e.target.value)
    // }
    const submitInfo = (e)=>{
        e.preventDefault()
        const data = {
            id : Math.random().toString(),
            name : nameRef.current.value,
            age : ageRef.current.value
        }
        if(data.name.trim()===''||data.age===''){
            handleError("Please fill in the form")
            return
        }
        if(data.age<=0){
            handleError("The age cannot in negative value")
            return
        }
        props.onSubmitUser(data)
        nameRef.current.value=''
        ageRef.current.value=''
    }

    const handleError = (msg)=>{
        if(status===true){
            setStatus(false)
            setMessage(msg)
        }else{
            setStatus(true)
            setMessage('')
        }
    }
    return(
        <div >
            {!status&&<Error message={message} onHandleError={handleError}/>}
            <form className={style['user-form']}>
                <h2>Username</h2>
                <input  type="text" ref={nameRef}/>
                <h2>Age (Years)</h2>
                <input type="number" min="1" step="1" ref={ageRef}/>
                <button type="submit" onClick={submitInfo}>Add User</button>
            </form>
        </div>
    )
}