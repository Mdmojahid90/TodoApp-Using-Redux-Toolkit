import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import todoStore from "./store/tododatastore.js";

//Using Provider so that Store can accessible for every components

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={todoStore}>
    <App />
  </Provider>
);
