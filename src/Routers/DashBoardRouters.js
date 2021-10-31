import React from 'react'
import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Login from '../Components/Login/Login';
import { Registro } from '../Components/Login/Registro';
import { Navegador } from '../Components/Navegador';
import { Principal } from '../Components/Principal';


export const DashBoardRouters = () => {
    return (
        <Router>
            <Navegador/>
            <Switch>
                <Route exact path="/"   component={Principal} />
            
            </Switch>
        </Router>
)
}
