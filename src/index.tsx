import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {combineReducers, createStore} from "redux";
import {BlogReducer, UserReducer} from "./store/reducers";
import {Provider} from "react-redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import './index.scss';

const rootReducer = combineReducers({blogState: BlogReducer, userState: UserReducer});

const store = createStore(rootReducer, composeWithDevTools());


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
