<h1>Adding a date picker with scope select a range of days</h1>

<p>To allow to use filter range in any component in App, I need to move it to global state.</p>

<b>Reducer function</b> from Redux developed read and calculate new state. Here, I keep filter state.

```javaScript
const defaultFilters = {
    dateRange: {
        from: null,
        to: null
    }
};

export default function ArticlesFilters(filters = defaultFilters, action) {
    switch (action.type) {
        case "CHANGE_DATE_RANGE": {
            return {
                ...filters,
                dateRange: { ...filters.dateRange, ...action.payload.dateRange }
            };
        }
        default:
            return filters;
    }
}

```

<b>Connect function</b> I use to bridge regular React component with its state inserted in Redux store.

```javaScript
export default connect((store) => {
    return {
        articles: filtratedArticleSelector(store)
    };
})(Accordion(ArticleList));

```

<b>CreateSelector function</b> from the Reselect library remembers the arguments passed in the last time it was invoked and doesn’t recalculate if the arguments are the same. This way,  i can avoid unnecessary rendering.

```javaScript
export const dayRangeSelector = (store) => store.filters.dateRange;
export const getAriclesMap = (store) => store.articles;
export const getAriclesList = createSelector(getAriclesMap, (articlesMap) =>
    articlesMap.valueSeq().toArray()
);

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

```
