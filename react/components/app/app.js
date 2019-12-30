import React from "react";
import {Route, Switch} from 'react-router-dom';
import Home from "../home/home";
import ProductDetail from "../productDetail";
import Page404 from "../404/page404";

export default class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <React.Fragment>

            <Switch>
                <Route exact render={(props)=> <Home {...props}/>} path="/"/>
                <Route exact render={(props)=> <ProductDetail {...props}/>} path="/product/:id"/>
                <Route render={(props)=> <Page404 {...props}/>} path="/*"/>
            </Switch>
            </React.Fragment>
        )
    };

};