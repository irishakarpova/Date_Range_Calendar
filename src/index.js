import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ConnectedRouter as Router } from "connected-react-router";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";
import history from "./history";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router history={history}>
                <App />
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
