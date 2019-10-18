/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
import { createStore, applyMiddleware, compose } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import rootReducer from "./modules";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory();

const middleware =
  process.env.NODE_ENV !== "production"
    ? [
        require("redux-immutable-state-invariant").default(),
        thunk,
        routerMiddleware(history)
      ]
    : [thunk, routerMiddleware(history)];

export default createStore(
  rootReducer(history),
  composeEnhancer(applyMiddleware(...middleware))
);
