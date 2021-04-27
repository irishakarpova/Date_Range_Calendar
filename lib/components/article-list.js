function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from "react";
import Article from "./article";
import { connect } from "react-redux";
import { filtratedArticleSelector } from "../selectors";
import styles from "./styles.module.css";
import Accordion from "./accordion";

if (module.hot) {
  module.hot.accept("./styles.module.css", function () {
    require("./styles.module.css");
  });
}

class ArticleList extends Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      showItems: 4
    });

    _defineProperty(this, "handleScroll", () => {
      if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
        this.setState({
          showItems: this.state.showItems + 5
        });
      }
    });
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: styles.CardColumns
    }, /*#__PURE__*/React.createElement("ul", {
      className: styles.Cardlist
    }, this.itemsListLeft), /*#__PURE__*/React.createElement("ul", {
      className: styles.Cardlist
    }, this.itemsListRight)));
  }

  get itemsListLeft() {
    const {
      articles,
      openArticleId,
      handleOpenArticleId
    } = this.props;
    return articles.slice(0, this.state.showItems).map((article, index) => {
      return index % 2 === 0 ? /*#__PURE__*/React.createElement("li", {
        className: styles.CardListItems,
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
    return articles.slice(0, this.state.showItems).map((article, index) => {
      return (index + 1) % 2 === 0 ? /*#__PURE__*/React.createElement("li", {
        className: styles.CardListItems,
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