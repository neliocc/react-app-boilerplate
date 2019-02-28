/* This is an example reducer to be used as reference. */

//Import the action types this reducer will handle
import {EXAMPLE_ACTION_TYPE} from '../action_ types';

//Create the initial state
const initialState=
{
    example_value:""
}

//Implement the reducer function
export default function(state = initialState, action)
{
    //Detect what action is being performed
    switch(action.type)
    {
        //Once you know the action, return the new state
        case EXAMPLE_ACTION_TYPE:
            return {
                ...state,
                example_value:action.payload
            };
        default:
            return state;
    }
}