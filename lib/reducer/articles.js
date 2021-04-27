import { articles } from "../fixtures";
import { Record, Map } from "immutable";

function arrayToMap(arr, ArticleRecord) {
  return arr.reduce((acc, item) => acc.set(item.id, ArticleRecord(item)), new Map({}));
}

const ArticleRecord = Record({
  id: null,
  title: null,
  text: null,
  date: null,
  comments: []
});
export default function ArticlesReducer(articlesState = arrayToMap(articles, ArticleRecord), action) {
  const {
    type,
    payload,
    randomId
  } = action;

  switch (type) {
    case "ADD_COMMENT":
      return articlesState.updateIn([payload.articleId, "comments"], comments => {
        return comments.concat(randomId);
      });

    case "DELETE_ARTICLE":
      return articlesState.delete(payload.id);

    default:
      return articlesState;
  }
}