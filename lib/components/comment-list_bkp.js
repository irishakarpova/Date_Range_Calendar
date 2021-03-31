import React, { Component } from "react";
import Comment from "./comment";
import WithAction from "./withAccordion";
import { connect } from "react-redux";

class CommentList extends Component {
  render() {
    const {
      comments = [],
      handleOpen,
      isOpenComment
    } = this.props;
    return /*#__PURE__*/React.createElement(React.Fragment, null, comments.length ? /*#__PURE__*/React.createElement("button", {
      onClick: handleOpen
    }, isOpenComment ? "open comment" : "closed comments") : null, isOpenComment ? /*#__PURE__*/React.createElement("ul", null, this.itemsList) : null);
  }

  get itemsList() {
    const {
      comments = []
    } = this.props;
    return comments.map(comment => /*#__PURE__*/React.createElement("li", {
      key: comment.id
    }, /*#__PURE__*/React.createElement(Comment, {
      comment: comment
    })));
  }

}

export default connect(store => {
  return {
    comments: store.comments
  };
})(WithAction(CommentList));