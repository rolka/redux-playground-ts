import actions from '../actionTypes';

let lastId = 0;
const initialState: any[] = [];

interface BookAddedAction {
    type: typeof actions.BOOK_ADDED;
    payload: {
        title: string;
        author: string;
    };
}

interface BookRemovedAction {
    type: typeof actions.BOOK_REMOVED;
    payload: {
        id: number;
    };
}

type BookAction = BookAddedAction | BookRemovedAction;

const booksReducer = (state = initialState, action: BookAction) => {
    switch (action.type) {
        case actions.BOOK_ADDED:
            // TypeScript knows now that this is a BookAddedAction
            return [
                ...state,
                {
                    id: ++lastId,
                    title: action.payload.title,  // No error
                    author: action.payload.author // No error
                }
            ];
        case actions.BOOK_REMOVED:
            // TypeScript knows now that this is a BookRemovedAction
            return state.filter(book => book.id !== action.payload.id);
        default:
            return state;
    }
}

export default booksReducer;
