//  IMPORT 
import { createStore, combineReducers } from "redux";

import {TestReducer, TestReducerSec, DialogReducer} from '../reducers'
// CREATE GLOBAL STORE
export const GlobalStore = createStore(
    combineReducers({ //combine all reducer
      DialogReducer,
      CompenentTest :TestReducer,
      CompenentTestSec :TestReducerSec,
    },
));  