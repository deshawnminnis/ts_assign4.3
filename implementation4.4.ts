// implementation namespace doc used to import function/interface4 //

import {myBooks} from "./interface4"       //import namespace 
import {bookDetails} from "./function4"    //import function associated with namespace

let myBook : myBooks.books = {title: "Purpose Driven Life", author: "Rich Warren", genre: "Religious", fict_nonfic: false}
bookDetails(myBook);