import React, { Component } from "react";
import Article from "./article";
import { connect } from "react-redux";
import { filtratedArticleSelector } from "../selectors";
import classes from "./styles.module.css";
import Accordion from "./accordion";

if (module.hot) {
  module.hot.accept("./styles.module.css", function () {
    require("./styles.module.css");
  });
}

class ArticleList extends Component {
  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: classes.CardColumns
    }, /*#__PURE__*/React.createElement("ul", {
      className: classes.Cardlist
    }, this.itemsListLeft), /*#__PURE__*/React.createElement("ul", {
      className: classes.Cardlist
    }, this.itemsListRight));
  }

  get itemsListLeft() {
    const {
      articles,
      openArticleId,
      handleOpenArticleId
    } = this.props;
    return articles.map((article, index) => {
      return index % 2 === 0 ? /*#__PURE__*/React.createElement("li", {
        className: classes.CardListItems,
        key: article.id
      }, /*#__PURE__*/React.createElement(Article, {
        article: article,
        openArticleId: openArticleId,
        handleOpenArticleId: handleOpenArticleId
      })) : null;
    });
  }

  get itemsListRight() {
    const {
      articles,
      openArticleId,
      handleOpenArticleId
    } = this.props;
    return articles.map((article, index) => {
      return (index + 1) % 2 === 0 ? /*#__PURE__*/React.createElement("li", {
        className: classes.CardListItems,
        key: article.id
      }, /*#__PURE__*/React.createElement(Article, {
        article: article,
        openArticleId: openArticleId,
        handleOpenArticleId: handleOpenArticleId
      })) : null;
    });
  }

}

export default connect(store => {
  return {
    articles: filtratedArticleSelector(store)
  };
})(Accordion(ArticleList));