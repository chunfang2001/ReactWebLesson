import classes from "./ItemContainer.module.css"
import Item from "./Item";
import React, { useEffect, useState } from "react";

function ItemContainer(){
    const [list,setList] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    const [error,setError] = useState(null)
    
    const fetchData = async ()=>{
      setIsLoading(true)
      setError(null)
      try{
        const response = await fetch("https://learning-project-9e8c8-default-rtdb.firebaseio.com/meals.json",{
         method:"GET"
       })
       if(!response.ok){
         throw new Error("Something went wrong")
       }
       const data = await response.json()
      
       const load = []

       for(const key in data){
         load.push({
           id: data[key].id,
           name: data[key].name,
           description: data[key].description,
           price : data[key].price
         })
       }
       setList(load)
      }catch(error){
        setError(error.message)
      }
      setIsLoading(false)
    }

    useEffect(()=>{
      fetchData()
    },[])

    return(
        <div className={classes['list-container']}>
            {isLoading&&<p>isLoading</p>}
            {error&&<p>{error}</p>}
            {list.map((item)=><Item 
            key={item.id}
            item={item}
            name={item.name} 
            description={item.description}
            price={item.price}/>)}
        </div>
    )
}

export default ItemContainer