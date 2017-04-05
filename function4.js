// functions to be consumed by namespace mybooks //
"use strict";
exports.__esModule = true;
function bookDetails(book) {
    console.log("The book details are as follows: Title: " + book.title + " " + "Author: " + book.author + " " + "Genre: " + book.genre +
        " " + "Fictitious " + book.fict_nonfic);
}
exports.bookDetails = bookDetails;
;
