import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Admin from './containers/Admin/Admin';
import Login from './containers/Admin/Login/Login';
// import Spinner from './components/UI/Spinner/Spinner';

import './App.css';

const app = () => {
    return (
        <div className="App">
            <Switch>
                <Route path="/" exact render={() => <h1>Dashboard</h1>} />
                <Route path="/admin" component={Admin} />
                <Route path="/login" component={Login} />
            </Switch>
        </div>
    );
}

export default app;
