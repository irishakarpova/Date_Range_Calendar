import React, { Component } from "react";
import Comment from "./comment";
import WithAction from "./withAccordion";
import classes from "./styles.module.css";
import AddArticle from "./addArticle";
import { AiFillDownCircle, AiFillUpCircle } from "react-icons/ai";

if (module.hot) {
  module.hot.accept("./styles.module.css", function () {
    require("./styles.module.css");
  });
}

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
      className: classes.CardListGroups,
      onClick: () => {
        handleOpenArticleId(id);
      }
    }, /*#__PURE__*/React.createElement("h4", {
      className: classes.CardListName
    }, "QUOTES"), isOpen ? /*#__PURE__*/React.createElement(AiFillUpCircle, {
      className: classes.Up_Down_Close
    }) : /*#__PURE__*/React.createElement(AiFillDownCircle, {
      className: classes.Up_Down_Close
    })) : null, isOpenComment && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ul", {
      className: classes.CardlistComments
    }, this.itemsList), isOpen ? /*#__PURE__*/React.createElement("button", {
      onClick: handleOpenForm,
      className: classes.BtnAddQuote
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
      className: classes.CardListItems1
    }, /*#__PURE__*/React.createElement(Comment, {
      id: id
    })));
  }

}

export default WithAction(CommentList);