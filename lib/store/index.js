import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import randomId from "../middleware";
import rootReducer from "../reducer";
const enhancer = applyMiddleware(thunk, randomId);
const store = createStore(rootReducer, enhancer);
export default store;