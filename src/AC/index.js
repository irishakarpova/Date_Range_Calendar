import { replace } from "connected-react-router";

export function increment() {
    return {
        type: "INCREMENT"
    };
}

export function handleChangeDay(dateRange) {
    return {
        type: "CHANGE_DATE_RANGE",
        payload: { dateRange }
    };
}
export function deleteArticle(id) {
    return {
        type: "DELETE_ARTICLE",
        payload: { id }
    };
}
export function addComment(comment, articleId) {
    return {
        type: "ADD_COMMENT",
        payload: { comment, articleId },
        generateId: true
    };
}
export function fetchArticles(page, from, to) {
    from = from ? from.getTime() : null;
    to = to ? to.getTime() : null;
    return (dispatch, getState) => {
        const {
            articles: { loadedPage },
            articles: { loadedFrom },
            articles: { loadedTo }
        } = getState();

        console.log("loadedFrom", loadedFrom);
        if (loadedPage === page && loadedFrom === from && loadedTo === to)
            return;

        fetch(
            `/api/article?limit=5&offset=${(page - 1) * 5}&from=${
                from ? from : ""
            }&to=${to ? to : ""}`
        )
            .then((res) => res.json())
            .then((response) =>
                dispatch({
                    type: "FETCH_ARTICLES",
                    payload: { page, from, to },
                    response
                })
            )
            .catch((error) => {
                dispatch(replace("/error"));
                dispatch({
                    type: "FAIL_FETCH_ARTICLES",
                    error
                });
            });
    };
}

export function fetchComments(id) {
    return (dispatch) => {
        dispatch({
            type: "START_FETCHING_COMMENTS",
            payload: { id }
        });
        fetch(`/api/comment?article=${id}`)
            .then((res) => res.json())
            .then((response) =>
                dispatch({
                    type: "FETCH_COMMENTS",
                    payload: { id },
                    response
                })
            )
            .catch((error) => {
                dispatch({
                    type: "FAIL_FETCH_COMMENTS",
                    payload: { id },
                    error
                });
            });
    };
}

export function fetchArticleById(id) {
    return (dispatch) => {
        fetch(`./api/article/${id}`)
            .then((res) => res.json())
            .then((response) =>
                dispatch({
                    type: "FETCH_ARTICLE",
                    payload: { id },
                    response
                })
            );
    };
}
