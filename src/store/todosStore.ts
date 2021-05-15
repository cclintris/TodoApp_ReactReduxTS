import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { todoReducer } from "./reducers";

const todosStore = createStore(todoReducer, applyMiddleware(thunk));
export default todosStore;
