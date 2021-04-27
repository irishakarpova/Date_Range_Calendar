import { articles } from "../fixtures";
export function increment() {
  return {
    type: "INCREMENT"
  };
}
export function decrement() {
  return {
    type: "DECREMENT"
  };
}
export function handleChangeDay(dateRange) {
  return {
    type: "CHANGE_DATE_RANGE",
    payload: {
      dateRange
    }
  };
}
export function deleteArticle(id) {
  return {
    type: "DELETE_ARTICLE",
    payload: {
      id
    }
  };
}
export function addComment(comment, articleId) {
  return {
    type: "ADD_COMMENT",
    payload: {
      comment,
      articleId
    },
    generateId: true
  };
}