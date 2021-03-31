import CommentList from "./comment-list";
import "../App.css";
import { connect } from "react-redux";
import { deleteArticle } from "../AC";
import styles from "./styles.module.css";
import { AiFillCloseCircle } from "react-icons/ai";

function Article({
  article,
  deleteArticle,
  openArticleId,
  handleOpenArticleId
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: styles.CardContainer
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.CardHeadRow
  }, /*#__PURE__*/React.createElement(AiFillCloseCircle, {
    className: styles.Up_Down_Close,
    onClick: () => {
      deleteArticle(article.id);
    }
  })), /*#__PURE__*/React.createElement("h1", {
    className: styles.CardHeader
  }, article.title), /*#__PURE__*/React.createElement("h4", {
    className: styles.CardDate
  }, article.date), /*#__PURE__*/React.createElement("section", {
    className: styles.CardText
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