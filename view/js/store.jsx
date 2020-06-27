//  IMPORT MODULE
import { createStore, combineReducers } from "redux";

// IMPORT REDUCERS
import TestReducer from './reducers/test'

// CREATE GLOBAL STORE
export const GlobalStore = createStore(
    combineReducers({ //combine all reducer
      CompenentTest :TestReducer,
    },
));  