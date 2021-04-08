import { createStore, applyMiddleware } from "redux";
import randomId from "../middleware";
import thunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";
import history from "../history";

import rootReducer from "../reducer";

const enhancer = applyMiddleware(thunk, routerMiddleware(history), randomId);

const store = createStore(rootReducer, enhancer);
export default store;
