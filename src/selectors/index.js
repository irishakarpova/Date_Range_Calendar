import { createSelector } from "reselect";

export const dayRangeSelector = (store) => store.filters.dateRange;
export const getAriclesMap = (store) => store.articles;
export const getAriclesList = createSelector(getAriclesMap, (articlesMap) =>
    articlesMap.valueSeq().toArray()
);

export const getComments = (store) => {
    return store.comments;
};
export const getId = (_, props) => props.id;

export const getComment = createSelector(getComments, getId, (comments, id) => {
    return comments.get(id);
});

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
