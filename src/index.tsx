import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";


//files
import App from './components/App';
import Reducers from "./reducers/combineReducers";

const store = createStore(Reducers, applyMiddleware(thunk)); // Applying middleware to our store

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));
