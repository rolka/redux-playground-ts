import { createStore } from 'redux';
import { booksReducer } from './reducers';
import { userReducer } from "./reducers";
import {combineReducers} from "redux";
const rootReducer = combineReducers({
    books: booksReducer,
    users: userReducer,
})
// Create the Redux store
const store = createStore(rootReducer);

export default store;
