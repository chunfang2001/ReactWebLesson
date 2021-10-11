import Quote from "./Quote"
import classes from "./AllQuote.module.css"
import { useHistory, useLocation, useRouteMatch } from "react-router"
import { useEffect, useState } from "react"


const sortQuote = (quotes,sortOrder)=>{
    return quotes.sort((quoteA,quoteB)=>{
        if(sortOrder){
            return quoteA.id>quoteB.id?1:-1
        }
        else{
            return quoteA.id<quoteB.id?1:-1
        }
    })
}
const AllQuote = () =>{
    const location = useLocation()
    const history = useHistory()
    const query = new URLSearchParams(location.search)
    const match = useRouteMatch()
    const [exampleQuote, setExampleQuote] = useState([])

    useEffect(()=>{
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
        }
        sendRequest()
    },[])

    let sortOrder=true
    if(location.search!==""){
        sortOrder = query.get('sort')==="asc"?true:false
    }

    const sortHandler = ()=>{
        if(!sortOrder){
            history.push(`${match.url}?sort=asc`)
        }else{
            history.push(`${match.url}?sort=dsc`)
        }
        
    }
    const quotes = sortQuote(exampleQuote,sortOrder)
    return <div className={classes['main-container']}>
        <button onClick={sortHandler}>{!sortOrder?"Ascending order":"Descending order"}</button>
        {quotes.map((item)=>
            <Quote author={item.author} title={item.content} id={item.id} key={item.id}/>
        )}
    </div>
}

export default AllQuote