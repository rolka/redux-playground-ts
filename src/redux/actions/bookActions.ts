import bookActions from '../actionTypes';
const bookAdded = ( title: string, author: string ) => {
    return {
        type: bookActions.BOOK_ADDED,
        payload: {
            title,
            author
        }
    }
}
const bookRemoved = ( id: number ) => {
    return {
        type: bookActions.BOOK_REMOVED,
        payload: {
            id
        }
    }
}
export { bookAdded, bookRemoved };