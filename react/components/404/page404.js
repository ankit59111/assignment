import React from 'react';
import {NavLink} from "react-router-dom";


export default function Page404(props) {
    return(<div>
        <h2>Page Not Found</h2>
        <p>Go to <NavLink to={'/'}>Home</NavLink></p>
    </div>)
}