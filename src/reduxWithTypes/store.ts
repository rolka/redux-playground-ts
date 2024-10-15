import { createStore } from 'redux';
import { booksReducer} from "./reducers";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
    books: booksReducer,
});
const store = createStore(rootReducer);
export default store;
