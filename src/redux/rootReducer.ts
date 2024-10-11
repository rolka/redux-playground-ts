import { combineReducers } from "redux";
import booksReducer from "./reducers/bookReducer";
const rootReducer = combineReducers({
    books: booksReducer,
})
export default rootReducer;