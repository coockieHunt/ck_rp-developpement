//  IMPORT 
import { createStore, combineReducers } from "redux";

import {TestReducer, DialogReducer} from '../reducers'
// CREATE GLOBAL STORE
export const GlobalStore = createStore(
    combineReducers({ //combine all reducer
      CompenentDialog :DialogReducer,
      CompenentTest :TestReducer,
    },
));  