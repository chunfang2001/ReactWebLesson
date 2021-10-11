import classes from "./Header.module.css"
import { Link, NavLink } from "react-router-dom"

const Header = ()=>{
    return (
        <header className={classes['header']}>
            <h1><Link to="/">Great Quotes</Link></h1>
            <ul className={classes['navbar']}>
                <li><NavLink activeClassName={classes['active-navbar']} to="/allQuote">All Quotes</NavLink></li>
                <li><NavLink activeClassName={classes['active-navbar']} to="/newQuote">Add a Quote</NavLink></li>
            </ul>
        </header>
    )
}

export default Header