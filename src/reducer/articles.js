import { Record, Map } from "immutable";

function arrayToMap(arr, ArticleRecord) {
    return arr.reduce(
        (acc, item) => acc.set(item.id, ArticleRecord(item)),
        new Map({})
    );
}
const ArticleRecord = Record({
    id: null,
    title: null,
    text: null,
    date: null,
    comments: []
});
const ReducerRecord = Record({
    entities: arrayToMap([], ArticleRecord),
    loading: false,
    error: null,
    loaded: false,
    pagination: new Map({}),
    total: null,
    loadedPage: null
});

export default function ArticlesReducer(
    articlesState = new ReducerRecord(),
    action
) {
    const { type, payload, randomId, response } = action;

    switch (type) {
        case "ADD_COMMENT":
            return articlesState.updateIn(
                ["entities", payload.articleId, "comments"],
                (comments) => {
                    return comments.concat(randomId);
                }
            );
        case "START_FETCHING_ARTICLES": {
            return articlesState.set("loading", true);
        }

        case "FETCH_ARTICLES":
            return articlesState
                .set("total", response.total)
                .update("entities", (entities) =>
                    arrayToMap(response.records, ArticleRecord)
                )
                .set("loadedPage", payload.page)
                .set("loading", false)
                .set("loaded", true);

        case "DELETE_ARTICLE":
            return articlesState.deleteIn(["entities", payload.id]);

        default:
            return articlesState;
    }
}
