import {BookAction, UserAction} from './actions';
import {BOOK_ADDED, BOOK_REMOVED, USER_ADDED, USER_REMOVED} from './actionTypes';

interface Book {
    id: number;
    title: string;
    author: string;
}

const initialState: Book[] = [];
let lastId = 0;
export const booksReducer = (state = initialState, action: BookAction): Book[] => {
    switch (action.type) {
        case BOOK_ADDED:
            return [
                ...state,
                {
                    id: ++lastId,
                    title: action.payload.title,
                    author: action.payload.author
                }
            ];

        case BOOK_REMOVED:
            return state.filter(book => book.id !== action.payload.id);

        default:
            return state;
    }
};
interface User {
    id: number;
    username: string;
    email: string;
}
type UserType = {
    id: number
    username: string
    email: string
}
const userInitialState: User[] = [];

export const userReducer = (state = userInitialState, action: UserAction): User[] => {
    switch (action.type) {
        case USER_ADDED:
            return [
                ...state,
                {
                    id: ++lastId,
                    username: action.payload.username,
                    email: action.payload.email,
                }
            ]
        case USER_REMOVED:
            return state.filter(user => user.id !== action.payload.id);
        default:
            return state;
    }
}