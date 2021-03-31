import { createStore, applyMiddleware } from "redux";
import randomId from "../middleware";

import rootReducer from "../reducer";

const enhancer = applyMiddleware(randomId);

const store = createStore(rootReducer, enhancer);
export default store;
