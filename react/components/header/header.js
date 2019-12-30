import React from 'react';
import {NavLink} from "react-router-dom";

import './header.css';

export default function Header(props) {

    return (
        <header>
            <h1><NavLink to={'/'}><img src={props.logo} alt={'comapny name'}/></NavLink></h1>
        </header>
    )

}