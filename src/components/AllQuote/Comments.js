import classes from './Comments.module.css'
import Comment from './Comment'

const Comments = ()=>{
    return <div className={classes['comments-box']}>
        <Comment person="Tan" content="Hello"/>
    </div>
}

export default Comments