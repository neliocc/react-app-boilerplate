/*
 This will be your root reducer, in this file you will import all the reducers and export them as one reducer.
*/

import {combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router';
//We will use the example reducer as an example
import exampleReducer from './exampleReducer';

/*
    The default export of the file is a reducer created as a combination of all reducers.
*/
export default (history) => combineReducers(
    {
        router: connectRouter(history),
        example:exampleReducer
    })