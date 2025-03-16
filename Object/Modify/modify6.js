const book = {
    titile : "Harry Potter",
    author: "JK rowling",
    pages: 500,
}
Object.seal(book);
book.author = "JK Rowling";
console.log(book);