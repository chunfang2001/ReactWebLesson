import { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import classes from './QuoteForm.module.css'
import { Prompt } from 'react-router'

const QuoteForm = ()=> {
    const [isEntering, setIsEntering] = useState(true)
    const author = useRef('')
    const content = useRef('')

    const history = useHistory()
    const submitFormHandler = async (event)=>{
        event.preventDefault()
        setIsEntering(false)
        const post = {
            "author":author.current.value,
            "content":content.current.value
        } 
        await fetch("https://new-learning-60d1f-default-rtdb.firebaseio.com/post.json",{
            method:"POST",
            body:JSON.stringify(post),
            header:{
                "Content-Type":"application/json"
            }
        })
        history.push('/allQuote')
    }

    const onFocusHandler = () =>{
        setIsEntering(true)
    }
    
    return <>
    <Prompt when={isEntering} message="try"/>
    <form onFocus={onFocusHandler} className={classes['form']}>
        <div className={classes['input-element']}>
            <label>Author: </label>
            <input type="text" className={classes['text-element']} ref={author}></input>
        </div>
        <div className={classes['input-element']}>
            <label>Content: </label>
            <textarea rows="22" className={classes['textarea-element']} ref={content}></textarea>
        </div>
        <div className={classes['input-button-container']}>
            <button className={classes['input-button']} onClick={submitFormHandler} >submit</button>
        </div>
    </form>
    </>
}

export default QuoteForm