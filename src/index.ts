const greeting: string = "Hello, TypeScript!!!!";
console.log( greeting );

import store from "./redux/store";
import { bookAdded } from './redux/actions/bookActions'

store.dispatch(bookAdded( 'Book tit', 'Book auth' ));
// console.log(store.getState() );

import store2 from './redux2/store';
import { addBook, removeBook, addUser, removeUser } from './redux2/actions';

// Add a book
store2.dispatch(addBook('The Great Gatsby', 'F. Scott Fitzgerald'));
store2.dispatch(addUser( 'RoZa', 'ro@za.lt' ))
// console.log(store2.getState()); // [{ id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' }]

import store3 from './reduxWithTypes/store';
import { addTheBook, removeTheBook } from './reduxWithTypes/actions';
store3.dispatch(addTheBook('Store 3 book', 'Great Gatsby'));
console.log(store3.getState());
