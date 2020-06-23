import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "mobx-react";
import store from "./stores/RootStore";

ReactDOM.render(
  <Provider
    store={store}
    listStore={store.listStore}
    sessionStore={store.sessionStore}
    signupStore={store.signupStore}
    signinStore={store.signinStore}
    pwStore={store.pwStore}
    makeListStore={store.makeListStore}
    modelListStore={store.modelListStore}
    baseListStore={store.baseListStore}
  >
    <App />
  </Provider>,

  document.getElementById("root")
);

serviceWorker.unregister();
