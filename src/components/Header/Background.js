import img from "../../assets/meals.jpg"
import React from "react"

import classes from "./Background.module.css"
function Background(){
    return (
        <div className ={classes['main-image']}>
            <img className ={classes['image']} src={img} alt="this is a image"/>
        </div>
        
    )
}

export default React.memo(Background)