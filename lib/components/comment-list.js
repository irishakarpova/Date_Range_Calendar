import React, { Component } from "react";
import Comment from "./comment";
import WithAction from "./withAccordion";
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
import AddArticle from "./addArticle";
import { AiFillDownCircle, AiFillUpCircle } from "react-icons/ai";

class CommentList extends Component {
  render() {
    const {
      comments = [],
      handleOpenForm,
      isOpenComment,
      isOpen,
      id,
      handleOpenArticleId
    } = this.props;
    return /*#__PURE__*/React.createElement(React.Fragment, null, comments.length ? /*#__PURE__*/React.createElement("div", {
      className: styles.CardListGroups,
      onClick: () => {
        handleOpenArticleId(id);
      }
    }, /*#__PURE__*/React.createElement("h4", {
      className: styles.CardListName
    }, "QUOTES"), isOpen ? /*#__PURE__*/React.createElement(AiFillUpCircle, {
      className: styles.Up_Down_Close
    }) : /*#__PURE__*/React.createElement(AiFillDownCircle, {
      className: styles.Up_Down_Close
    })) : null, isOpenComment && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ul", {
      className: styles.CardlistComments
    }, this.itemsList), isOpen ? /*#__PURE__*/React.createElement("button", {
      onClick: handleOpenForm,
      className: styles.BtnAddQuote
    }, "Add New") : /*#__PURE__*/React.createElement(AddArticle, {
      articleId: id
    })));
  }

  get itemsList() {
    const {
      comments = []
    } = this.props;
    return comments.map(id => /*#__PURE__*/React.createElement("li", {
      key: id,
      className: styles.CardListItems1
    }, /*#__PURE__*/React.createElement(Comment, {
      id: id
    })));
  }

}

export default WithAction(CommentList);