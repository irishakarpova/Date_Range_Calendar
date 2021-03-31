function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { Component } from "react";
import classes from "./styles.module.css";
import { connect } from "react-redux";
import { addComment } from "../AC";

if (module.hot) {
  module.hot.accept("./styles.module.css", function () {
    require("./styles.module.css");
  });
}

class AddComment extends Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      user: "",
      text: ""
    });

    _defineProperty(this, "handleChange", type => e => {
      const {
        value
      } = e.target;
      this.setState({
        [type]: value
      });
    });

    _defineProperty(this, "handleSubmit", ev => {
      ev.preventDefault();
      this.props.addComment(this.state);
      return this.setState({
        user: "",
        text: ""
      });
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: classes.inputForm
    }, /*#__PURE__*/React.createElement("form", {
      onSubmit: this.handleSubmit
    }, /*#__PURE__*/React.createElement("input", {
      className: classes.inputField,
      placeholder: "Name",
      value: this.state.user,
      onChange: this.handleChange("user")
    }), /*#__PURE__*/React.createElement("input", {
      className: classes.inputField,
      placeholder: "Quote",
      value: this.state.text,
      onChange: this.handleChange("text")
    }), /*#__PURE__*/React.createElement("button", {
      className: classes.BtnField,
      type: "submit"
    }, "SUBMIT")));
  }

}

export default connect(null, (dispatch, ownProps) => {
  return {
    addComment: comment => {
      return dispatch(addComment(comment, ownProps.articleId));
    }
  };
})(AddComment);