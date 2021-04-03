import React, { Component } from "react";
import Article from "./article";
import { connect } from "react-redux";
import { filtratedArticleSelector } from "../selectors";
import styles from "./styles.module.css";
import Accordion from "./accordion";

class ArticleList extends Component {
    state = {
        showItems: 4
    };

    handleScroll = () => {
        if (
            window.innerHeight + window.pageYOffset >=
            document.body.offsetHeight
        ) {
            this.setState({ showItems: this.state.showItems + 5 });
        }
    };

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    render() {
        return (
            <>
                <div className={styles.CardColumns}>
                    <ul className={styles.Cardlist}>{this.itemsListLeft}</ul>
                    <ul className={styles.Cardlist}>{this.itemsListRight}</ul>
                </div>
            </>
        );
    }

    get itemsListLeft() {
        const { articles, openArticleId, handleOpenArticleId } = this.props;
        return articles.slice(0, this.state.showItems).map((article, index) => {
            return index % 2 === 0 ? (
                <li className={styles.CardListItems} key={article.id}>
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
        return articles.slice(0, this.state.showItems).map((article, index) => {
            return (index + 1) % 2 === 0 ? (
                <li className={styles.CardListItems} key={article.id}>
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
