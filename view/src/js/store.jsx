import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import TestReducer from './reducers/test'
import { TestCompenent } from "./compenents/TestCompenent";

export const store = createStore(
    combineReducers({
        TestReducer
    },
));
