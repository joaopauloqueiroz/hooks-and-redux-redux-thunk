import { applyMiddleware, createStore, combineReducers } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";

import history from "../routes/history";

import forbiden from '../reducers/index'

const middlewares = [routerMiddleware(history), thunk];

const store = createStore(
  combineReducers({
    forbiden,
    router: connectRouter(history)
  }),
  applyMiddleware(...middlewares)
);

export default store;