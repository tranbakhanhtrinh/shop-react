import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import CMS from './containers/Admin/CMS/CMS';
import Login from './containers/Admin/Login/Login';
// import Spinner from './components/UI/Spinner/Spinner';

import './App.css';

const app = () => {
    return (
        <div className="App">
            <Navbar />
            <Switch>
                <Route path="/" exact render={() => <h1>Dashboard</h1>} />
                <Route path="/cms" component={CMS} />
                <Route path="/login" component={Login} />
            </Switch>
        </div>
    );
}

export default app;
