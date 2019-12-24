import React from "react";
import {Route, Switch} from 'react-router-dom';
import Home from "../home/home";
export default class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Switch>
                <Route exact render={(props)=> <Home {...props}/>} path="/"/>
            </Switch>
        )
    }

}