import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "mobx-react";
import store from "./stores/RootStore";
import Firebase, { FirebaseContext } from "./assets/Firebase";

ReactDOM.render(
  <Provider store={store}>
    <FirebaseContext.Provider value={new Firebase()}>
      <App />
    </FirebaseContext.Provider>
  </Provider>,

  document.getElementById("root")
);

serviceWorker.unregister();
