import { createSelector } from "reselect";

export const dayRangeSelector = (store) => store.filters.dateRange;
export const loadedFrom = (store) => store.articles.loadedFrom;
export const loadedTo = (store) => store.articles.loadedTo;

export const getAriclesMap = (store) => store.articles.entities;
export const getAriclesList = createSelector(getAriclesMap, (articlesMap) =>
    articlesMap.valueSeq().toArray()
);

export const commentsLoadingSelector = (store) => store.comments.loading;
export const commentsLoadedSelector = (store) => store.comments.loaded;
export const articlesLoadingSelector = (store) => store.articles.loading;
export const articlesLoadedSelector = (store) => store.articles.loaded;

export const getComments = (store) => {
    return store.comments.entities;
};
export const getId = (_, props) => props.id;

export const getComment = createSelector(getComments, getId, (comments, id) => {
    return comments.get(id);
});
export const totalCommentsSelector = (store) => store.articles.total;
export const articlesPagenationSelector = (store) => store.articles.pagination;

export const pageSelector = (_, props) => props.page;

export const loadedPageSelector = (store) => store.articles.loadedPage;

export const filtratedArticleSelector = createSelector(
    dayRangeSelector,
    getAriclesList,
    (dateRange, articles) => {
        const { from, to } = dateRange;
        return articles.filter((article) => {
            const published = Date.parse(article.date);
            return !from || !to || (published > from && published < to);
        });
    }
);
