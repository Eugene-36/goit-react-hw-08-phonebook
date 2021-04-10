import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
//import { PersistGate } from "redux-persist/integration/react";
import store from "./redux/store.js";
ReactDOM.render(
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={store.persistor}> */}
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {/* </PersistGate> */}
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
