import React from "react";
import { connect } from "react-redux";
import { getComment } from "../selectors";
import classes from "./styles.module.css";

if (module.hot) {
  module.hot.accept("./styles.module.css", function () {
    require("./styles.module.css");
  });
}

function Comment({
  comment
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h5", {
    className: classes.CardListUserName
  }, comment.user), /*#__PURE__*/React.createElement("p", {
    className: classes.CardListText
  }, comment.text));
}

const createMapStateToProps = () => {
  return (store, props) => ({
    comment: getComment(store, props)
  });
};

export default connect(createMapStateToProps)(Comment);