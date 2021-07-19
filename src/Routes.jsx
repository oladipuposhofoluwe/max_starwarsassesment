import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './pages/dashboard/dashboard';
import Login from './pages/login/Login';
import { Starship } from './pages/starships/Starship';


export const Routes = () => {
    return (
        <Switch>
            {/* <Route to='/' exact component={Login} /> */}
            {/* <Route to='/dashboard' exact  component={Dashboard}/> */}
            <Route to='/starships' exact  component={Starship}/>
        </Switch>
    )
}
