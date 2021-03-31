import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

if (module.hot) {
  module.hot.accept("./index.css", function () {
    require("./index.css");
  });
}

ReactDOM.render( /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(App, null)), document.getElementById("root"));
reportWebVitals();