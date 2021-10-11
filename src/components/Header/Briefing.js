import classes from "./Briefing.module.css"
import React from "react"

function Briefing(){
    return(
        <div className={classes['brief']}>
            <h1>Delicious Food, Delivered To You</h1>
            <p>Choose your favourtie meal from our broad selection of availbale meals and enjoy a delicious lunch or dinner at home.</p>
            <p>All out meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!</p>
        </div>
    )
}

export default React.memo(Briefing)