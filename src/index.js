import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { watchNamePage } from './store/sagas/';

import cmsReducer from './store/reducers/cms'

// const reducer = combineReducers({
//     home: homeReducer
// })

const sagaMiddleware = createSagaMiddleware();

const store = createStore(cmsReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchNamePage);

const app =
    (
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    )

ReactDOM.render(
    <React.StrictMode>
        {app}
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
