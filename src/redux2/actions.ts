import {BOOK_ADDED, BOOK_REMOVED, USER_ADDED, USER_REMOVED} from './actionTypes';
export interface BookAddedAction {
    type: typeof BOOK_ADDED;
    payload: {
        title: string;
        author: string;
    };
}
export interface BookRemovedAction {
    type: typeof BOOK_REMOVED;
    payload: {
        id: number;
    };
}
export interface UserAddedAction {
    type: typeof USER_ADDED;
    payload: {
        username: string;
        email: string;
    }
}
export interface UserRemovedAction {
    type: typeof USER_REMOVED;
    payload: {
        id: number;
    }
}
// Union type for both actions
export type BookAction = BookAddedAction | BookRemovedAction;
export type UserAction = UserAddedAction | UserRemovedAction;
export const addUser = ( username: string, email: string ): UserAddedAction => ({
    type: USER_ADDED,
    payload: { username, email }
})
export const removeUser = (id: number): UserRemovedAction => ({
    type: USER_REMOVED,
    payload: { id }
})

// Action creators
export const addBook = (title: string, author: string): BookAddedAction => ({
    type: BOOK_ADDED,
    payload: { title, author }
});

export const removeBook = (id: number): BookRemovedAction => ({
    type: BOOK_REMOVED,
    payload: { id }
});
