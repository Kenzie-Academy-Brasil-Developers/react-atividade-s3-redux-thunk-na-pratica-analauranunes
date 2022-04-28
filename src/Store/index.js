import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./Modules/User/reducer";

const reducers = combineReducers({ user: userReducer });

export const store = createStore(reducers, applyMiddleware(thunk));
