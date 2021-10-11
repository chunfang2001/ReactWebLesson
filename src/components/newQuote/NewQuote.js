import classes from './NewQuote.module.css'
import QuoteForm from './QuoteForm'

const NewQuote = ()=>{
    return <div className={classes['main-container']}>
        <h1 className={classes['title']}>Quote Form</h1>
        <QuoteForm/>
    </div>
}

export default NewQuote