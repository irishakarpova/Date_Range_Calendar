import React, { Component } from "react";
import Article from "./article";
import { connect } from "react-redux";
import { filtratedArticleSelector } from "../selectors";
import classes from "./styles.module.css";
import Accordion from "./accordion";

class ArticleList extends Component {
    render() {
        return (
            <div className={classes.CardColumns}>
                <ul className={classes.Cardlist}>{this.itemsListLeft}</ul>
                <ul className={classes.Cardlist}>{this.itemsListRight}</ul>
            </div>
        );
    }

    get itemsListLeft() {
        const { articles, openArticleId, handleOpenArticleId } = this.props;
        return articles.map((article, index) => {
            return index % 2 === 0 ? (
                <li className={classes.CardListItems} key={article.id}>
                    <Article
                        article={article}
                        openArticleId={openArticleId}
                        handleOpenArticleId={handleOpenArticleId}
                    />
                </li>
            ) : null;
        });
    }

    get itemsListRight() {
        const { articles, openArticleId, handleOpenArticleId } = this.props;
        return articles.map((article, index) => {
            return (index + 1) % 2 === 0 ? (
                <li className={classes.CardListItems} key={article.id}>
                    <Article
                        article={article}
                        openArticleId={openArticleId}
                        handleOpenArticleId={handleOpenArticleId}
                    />
                </li>
            ) : null;
        });
    }
}

export default connect((store) => {
    return {
        articles: filtratedArticleSelector(store)
    };
})(Accordion(ArticleList));
