import { BOOK_ADDED, BOOK_DELETED } from "./actionTypes";
import { BookAction } from "./actions";
type Book = {
    id: number;
    title: string;
    author: string;
}
const initState: Book[] = [];
let lastId: number = 0;

export const booksReducer = ( state = initState, action: BookAction  ): Book[] => {
    switch (action.type) {
        case BOOK_ADDED:
            return [
                ...state,
                {
                    id: ++lastId,
                    title: action.payload.title,
                    author: action.payload.author
                }
            ]
        case BOOK_DELETED:
            return state.filter(book => book.id !== action.payload.id);
        default:
            return state;
    }
}