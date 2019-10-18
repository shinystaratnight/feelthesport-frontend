import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import store, { history } from "./redux/store";
import App from "./App";



ReactDOM.render(
  <Provider store={store}>
    {/* <BrowserRouter> */}
    <ConnectedRouter history={history} >
      <App />
    </ConnectedRouter>
    {/* </BrowserRouter> */}
  </Provider>,
  document.getElementById("root")
);
