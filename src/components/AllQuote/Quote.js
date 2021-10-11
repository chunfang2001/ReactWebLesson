import classes from "./Quote.module.css"
import { Link } from "react-router-dom"
import { useRouteMatch } from "react-router"

const Quote = (props)=>{
    const match = useRouteMatch()
    return <div className={classes['container']}>
        <div>
            <h2>{props.title}</h2>
            <p>{props.author}</p>
        </div>
        <div>
            <button>
                <Link to={`${match.url}/${props.id}`}>ViewFullScreen</Link>    
            </button>
        </div>
    </div>
}

export default Quote