import Background from "./Background"
import Briefing from "./Briefing"
import Button from "./Button"
import React from "react"

import classes from "./Header.module.css"

function Header(props){
    return(
        <>   
            <div className={classes['header']}>
                <h2>ReactMeals</h2>
                <Button onShow={props.onShow}/>
            </div>
            <Background/>
            <div className={classes['alignment']}>   
                <Briefing/>
            </div>
        </>
    ) 
}

export default Header