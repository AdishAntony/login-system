import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginContainer from './login/containers/LoginContainer';
import UserListContainer from './user/containers/UserListContainer';

/**
 * The Routing Component providing all the routing Configuration
 * @param {*} props 
 */
const Routes = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/users" component={UserListContainer} />
                <Route path="/" component={LoginContainer} />
            </Switch>
        </BrowserRouter>
    )
}

export { Routes }