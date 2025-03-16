const books = {
    booke1: "Harry Potter",
    book2: "The Hobbit",
    book3: "Game of thrones"
}
for (const key in books){
    const value = books[key];
    console.log(value);
}