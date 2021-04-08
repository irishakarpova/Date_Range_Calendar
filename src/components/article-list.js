import React, { Component } from "react";
import Article from "./article";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import {
    dayRangeSelector,
    getAriclesList,
    articlesLoadingSelector,
    articlesLoadedSelector,
    totalCommentsSelector,
    loadedPageSelector,
    loadedFrom,
    loadedTo
} from "../selectors";
import styles from "./styles.module.css";
import Accordion from "./accordion";
import { fetchArticles } from "../AC";

class ArticleList extends Component {
    state = {
        showItems: 4
    };

    componentDidMount() {
        const { fetchArticles, dayRangeSelector } = this.props;
        fetchArticles(
            this.props.page,
            dayRangeSelector.from,
            dayRangeSelector.to
        );
    }
    componentDidUpdate() {
        const {
            fetchArticles,
            page,
            loadedPage,
            loadedFrom,
            loadedTo,
            dayRangeSelector
        } = this.props;
        if (
            loadedPage !== page ||
            loadedFrom !==
                (dayRangeSelector.from
                    ? dayRangeSelector.from.getTime()
                    : null) ||
            loadedTo !==
                (dayRangeSelector.to ? dayRangeSelector.to.getTime() : null)
        ) {
            fetchArticles(page, dayRangeSelector.from, dayRangeSelector.to);

            console.log(loadedFrom, loadedTo);
        }
    }

    render() {
        if (!this.props.total) return <p>Loading</p>;
        console.log("dayRangeSelector", this.props.dayRangeSelector);
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
            dayRangeSelector: dayRangeSelector(store),
            articles: getAriclesList(store, props),
            loading: articlesLoadingSelector(store),
            loaded: articlesLoadedSelector(store),
            total: totalCommentsSelector(store),
            loadedPage: loadedPageSelector(store),
            loadedFrom: loadedFrom(store),
            loadedTo: loadedTo(store)
        };
    },
    { fetchArticles }
)(Accordion(ArticleList));
