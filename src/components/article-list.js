import React, { Component } from "react";
import Article from "./article";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import {
    filtratedArticleSelector,
    articlesLoadingSelector,
    articlesLoadedSelector,
    totalCommentsSelector,
    loadedPageSelector
} from "../selectors";
import styles from "./styles.module.css";
import Accordion from "./accordion";
import { fetchArticles } from "../AC";

class ArticleList extends Component {
    state = {
        showItems: 4
    };

    componentDidMount() {
        const { fetchArticles } = this.props;
        fetchArticles(this.props.page);
    }
    componentDidUpdate() {
        const { fetchArticles, page, loadedPage } = this.props;
        if (loadedPage !== page) fetchArticles(page);
    }

    render() {
        if (!this.props.total) return <p>Loading</p>;
        console.log(this.props.articles.length);
        return (
            <>
                {this.getPaginator()}
                <div className={styles.CardColumns}>
                    <ul className={styles.Cardlist}>{this.itemsListLeft}</ul>
                    <ul className={styles.Cardlist}>{this.itemsListRight}</ul>
                </div>
            </>
        );
    }

    getPaginator() {
        const { total } = this.props;

        const items = new Array(Math.floor((total - 1) / 5) + 1)
            .fill()
            .map((_, i) => (
                <li key={i} className={styles.menuItems}>
                    <NavLink
                        to={`/article/${i + 1}`}
                        activeStyle={{ color: "#e5901c" }}
                    >
                        {i + 1}
                    </NavLink>
                </li>
            ));
        return <ul className={styles.menu}>{items}</ul>;
    }

    get itemsListLeft() {
        const {
            articles,
            openArticleId,
            handleOpenArticleId,
            loading
        } = this.props;

        if (loading || !articles) return <p>Loading</p>;
        return articles.map((article, index) => {
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
        const {
            articles,
            openArticleId,
            handleOpenArticleId,
            loading
        } = this.props;
        if (loading) return null;
        return articles.map((article, index) => {
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

export default connect(
    (store, props) => {
        return {
            articles: filtratedArticleSelector(store, props),
            loading: articlesLoadingSelector(store),
            loaded: articlesLoadedSelector(store),
            total: totalCommentsSelector(store),
            loadedPage: loadedPageSelector(store)
        };
    },
    { fetchArticles }
)(Accordion(ArticleList));
