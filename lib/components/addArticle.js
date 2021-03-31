function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { Component } from "react";
var classes = {
  "CardContainer": "styles-module__CardContainer___1RrBy",
  "CardHeadRow": "styles-module__CardHeadRow___6LjLp",
  "CardHeader": "styles-module__CardHeader___zS9He",
  "CardDate": "styles-module__CardDate___21hO8",
  "CardText": "styles-module__CardText___jcbOf",
  "AiFillCloseCircle_Btn": "styles-module__AiFillCloseCircle_Btn___pymF2",
  "CardListGroups": "styles-module__CardListGroups___1AiZ-",
  "CardListName": "styles-module__CardListName___3P5tF",
  "Up_Down_Close": "styles-module__Up_Down_Close___38mHR",
  "CardColumns": "styles-module__CardColumns___39jN1",
  "Cardlist": "styles-module__Cardlist___2OS2N",
  "CardlistComments": "styles-module__CardlistComments___DnyF6",
  "CardListItems": "styles-module__CardListItems___1r9i-",
  "CardListUserName": "styles-module__CardListUserName___3MrHq",
  "CardListText": "styles-module__CardListText___3a7gh",
  "reset_btn": "styles-module__reset_btn___2rr9v",
  "inputField": "styles-module__inputField___M4z9_",
  "BtnField": "styles-module__BtnField___15n0x",
  "BtnAddQuote": "styles-module__BtnAddQuote___16oD0"
};
import { connect } from "react-redux";
import { addComment } from "../AC";

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
    return /*#__PURE__*/React.createElement("form", {
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
    }, "SUBMIT"));
  }

}

export default connect(null, (dispatch, ownProps) => {
  return {
    addComment: comment => {
      return dispatch(addComment(comment, ownProps.articleId));
    }
  };
})(AddComment);