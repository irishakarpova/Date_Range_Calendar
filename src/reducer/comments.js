import { Record, Map } from "immutable";

function arrayToMap(arr, CommentRecord) {
    return arr.reduce(
        (acc, item) => acc.set(item.id, CommentRecord(item)),
        new Map({})
    );
}

const CommentRecord = Record({
    id: null,
    user: null,
    text: null
});
const ReducerComment = Record({
    entities: new Map({}),
    loading: false,
    loaded: false
});

export default function CommentsReducer(
    commentsState = new ReducerComment(),
    action
) {
    const { type, payload, randomId, response } = action;
    switch (type) {
        case "ADD_COMMENT":
            return commentsState.setIn(
                ["entities", randomId],
                new CommentRecord({
                    ...payload.comment,
                    id: randomId
                })
            );
        case "START_FETCHING_COMMENTS":
            return commentsState.set("loading", true);
        case "FETCH_COMMENTS":
            return commentsState
                .mergeIn(["entities"], arrayToMap(response, CommentRecord))
                .set("loading", false)
                .set("loaded", true);

        default:
            return commentsState;
    }
}
