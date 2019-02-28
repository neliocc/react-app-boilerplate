/*
    This file will contain and export your main store for redux.
*/

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history'
import rootReducer from '../reducers';
export const history = createBrowserHistory()
const initialState={};

const middleware=[thunk];


const store=createStore(rootReducer(history),initialState,applyMiddleware(routerMiddleware(history),...middleware));



export default store;