import { useParams, useRouteMatch } from "react-router"
import NotFound from "../UI/NotFound"
import classes from "./OneQuote.module.css"
import { Link, Route } from "react-router-dom"
import Comments from "./Comments"
import { useState,useEffect } from "react"

const OneQuote = ()=>{
    const parameter = useParams()
    const match = useRouteMatch()
    const [state,setState] = useState("pending")
    const [exampleQuote, setExampleQuote] = useState([])   
    const obj = exampleQuote.find((item)=>item.id===parameter.quoteId)

    useEffect(()=>{
        setState("pending")
        const sendRequest = async ()=>{
            const response = await fetch("https://new-learning-60d1f-default-rtdb.firebaseio.com/post.json")
            const data = await response.json()
    
            let transformed = []
    
            for(const i in data){
                const obj = {
                    id: i,
                    ...data[i]
                }
                transformed.push(obj)
            }
            setExampleQuote(transformed)
            setState("complete")
        }
        sendRequest()
        
    },[])

    if(state==="complete"){
        if(!obj){
            return <NotFound/>
        }else{
            return <div className={classes['main-container']}>
                <div className={classes['wrap']}>
                    <div className={classes['content']}>{obj.content}</div>
                    <div className={classes['author']}>
                        <p>{obj.author}</p>
                    </div>
                </div>
                <Route path={`${match.path}`} exact>
                    <div className={classes['load-comment']}>
                        <Link to={`${match.url}/comments`}>Load Comment</Link>
                    </div>
                </Route>
                <Route path={`${match.path}/comments`} exact>
                    <Comments/>
                    <button className={classes['add-button']}>Add Some Comment</button>
                </Route>
                <button className={classes['back-button']}><Link to="/allQuote">back</Link></button>
            </div>
        }
    }else{
        return <></>
    }
    

    
}

export default OneQuote