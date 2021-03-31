import { combineReducers } from "redux";
import articles from "./articles";
import comments from "./comments";
import filters from "./filters";

const rootReducer = combineReducers({
    articles: articles,
    comments,
    filters
});
export default rootReducer;
