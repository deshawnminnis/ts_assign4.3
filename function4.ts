// functions to be consumed by namespace mybooks //

import {myBooks} from './interface4'

    export function bookDetails(book:myBooks.books) {
        console.log("The book details are as follows: Title: " + book.title + " " + "Author: " + book.author + " " + "Genre: " + book.genre +
        " " + "Fictitious " + book.fict_nonfic  )
};