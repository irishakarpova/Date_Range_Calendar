import React from "react";
import CommentList from "./comment-list";
import { connect } from "react-redux";
import { deleteArticle } from "../AC";
import classes from "./styles.module.css";
import { AiFillCloseCircle } from "react-icons/ai";

if (module.hot) {
  module.hot.accept("./styles.module.css", function () {
    require("./styles.module.css");
  });
}

function Article({
  article,
  deleteArticle,
  openArticleId,
  handleOpenArticleId
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: classes.CardContainer
  }, /*#__PURE__*/React.createElement("div", {
    className: classes.CardHeadRow
  }, /*#__PURE__*/React.createElement(AiFillCloseCircle, {
    className: classes.Up_Down_Close,
    onClick: () => {
      deleteArticle(article.id);
    }
  })), /*#__PURE__*/React.createElement("h1", {
    className: classes.CardHeader
  }, article.title), /*#__PURE__*/React.createElement("h4", {
    className: classes.CardDate
  }, article.date), /*#__PURE__*/React.createElement("section", {
    className: classes.CardText
  }, article.text), /*#__PURE__*/React.createElement(CommentList, {
    comments: article.comments,
    handleOpenArticleId: handleOpenArticleId,
    id: article.id,
    isOpenComment: openArticleId === article.id
  }));
}

export default connect(null, {
  deleteArticle
})(Article);