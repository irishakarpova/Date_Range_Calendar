import { comments } from "../fixtures";
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

export default function CommentsReducer(
    commentsState = arrayToMap(comments, CommentRecord),
    action
) {
    const { type, payload, randomId } = action;
    switch (type) {
        case "ADD_COMMENT":
            return commentsState.set(randomId, {
                ...payload.comment,
                id: randomId
            });
        default:
            return commentsState;
    }
}
