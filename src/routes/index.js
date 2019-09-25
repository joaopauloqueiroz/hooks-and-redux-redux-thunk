import React from "react";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import Login from '../pages/login'
import Main from '../pages/main'
import history from './history'

const Routes = () => (
    <ConnectedRouter history={history}>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/profile" component={Login}/>
        </Switch>
    </ConnectedRouter>
)

export default Routes;