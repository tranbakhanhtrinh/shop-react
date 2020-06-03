import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Login from './containers/Login/Login';

import './App.css';

const app = () => {
    return (
        <div className="App">
            <Login />
            {/* <Switch>
                <Route path="/" exact render={() => <h1>Dashboard</h1>} />
                <Route path="/cms" render={() => <h1>CMS</h1>} />
                <Route path="/login" component={Login} />
            </Switch> */}
        </div>
    );
}

export default app;
