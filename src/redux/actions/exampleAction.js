/* This file contains example actions. */

// We will dispatch the example action
import {EXAMPLE_ACTION_TYPE} from '../action_ types';

//This is an example action
export function exampleAction(exampleValue)
{
    /*
        The function will return a callback to dispatch, which will dispatch the action.
    */
    return function(dispatch)
    {
        dispatch(
            {
                type:EXAMPLE_ACTION_TYPE,
                payload:exampleValue
            })
    }
}