import classes from "./Comment.module.css"

const Comment = (props)=>{
    return <div className={classes['comment']}>
        <h2>{props.person}</h2>
        <p>{props.content}</p>
    </div>
}

export default Comment