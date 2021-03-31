import React from "react";
import { connect } from "react-redux";
import { getComment } from "../selectors";
var styles = {
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

function Comment({
  comment
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h5", {
    className: styles.CardListUserName
  }, comment.user), /*#__PURE__*/React.createElement("p", {
    className: styles.CardListText
  }, comment.text));
}

const createMapStateToProps = () => {
  return (store, props) => ({
    comment: getComment(store, props)
  });
};

export default connect(createMapStateToProps)(Comment);