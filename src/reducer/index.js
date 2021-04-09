import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import articles from "./articles";
import comments from "./comments";
import filters from "./filters";
import counter from "./counter";
import history from "../history";

const rootReducer = combineReducers({
    articles,
    counter,
    comments,
    filters,
    router: connectRouter(history)
});
export default rootReducer;
