const greeting: string = "Hello, TypeScript!!!!";
console.log( greeting );

import store from "./redux/store";
import { bookAdded } from './redux/actions/bookActions'

store.dispatch(bookAdded( 'Book tit', 'Book auth' ));
console.log(store.getState() );