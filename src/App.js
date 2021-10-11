import React, { Suspense } from "react"
import Layout from "./components/UI/Layout"
import Header from "./components/Header/Header"
import { Redirect, Route, Switch } from 'react-router-dom'

const AllQuote = React.lazy(()=> import("./components/AllQuote/AllQuote"))
const NewQuote = React.lazy(()=>import("./components/newQuote/NewQuote"))
const OneQuote = React.lazy(()=>import("./components/AllQuote/OneQuote"))
const NotFound = React.lazy(()=>import("./components/UI/NotFound"))

function App(){
    return (
        <Layout>
            <Header/>
            <Suspense fallback={
                <div></div>
            }>
                <Switch>
                    <Route path="/" exact>
                        <Redirect to="/allQuote"></Redirect>
                    </Route>
                    <Route path="/newQuote" exact>
                        <NewQuote/>
                    </Route>
                    <Route path="/allQuote" exact>
                        <AllQuote/>
                    </Route>
                    <Route path="/allQuote/:quoteId">
                        <OneQuote/>
                    </Route>
                    <Route path="*">
                        <NotFound/>
                    </Route>
                </Switch>
            </Suspense>
        </Layout>
    )
}

export default App