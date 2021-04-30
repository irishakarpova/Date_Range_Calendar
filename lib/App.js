import React from "react";
import ArticleList from "./components/article-list";
import { Provider } from "react-redux";
import store from "./store";
import DayPicker from "./components/dayPicker";
import "./App.css";

if (module.hot) {
  module.hot.accept("./App.css", function () {
    require("./App.css");
  });
}

function App() {
  return /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(Provider, {
    store: store
  }, /*#__PURE__*/React.createElement(DayPicker, null), /*#__PURE__*/React.createElement(ArticleList, null)));
}

export default App;