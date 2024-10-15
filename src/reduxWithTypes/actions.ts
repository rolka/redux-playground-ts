import { BOOK_ADDED, BOOK_DELETED } from "./actionTypes";
export type BookAddedActionType = {
    type: typeof BOOK_ADDED;
    payload: {
        title: string;
        author: string;
    }
}
export type BookRemovedActionType = {
    type: typeof BOOK_DELETED;
    payload: {
        id: number;
    }
}
export type BookAction = BookAddedActionType | BookRemovedActionType;
export const addTheBook = ( title: string, author: string ): BookAddedActionType => {
    return {
        type: BOOK_ADDED,
        payload: { title, author }
    }
}
export const removeTheBook = ( id: number): BookRemovedActionType => ({
    type: BOOK_DELETED,
    payload: { id }
})