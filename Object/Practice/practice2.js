const article ={
    title : "Learning JS",
    category : "Programing",
};
if (article.hasOwnProperty("author")){
    console.log("Hi");
}
else{
    console.log("bye");
}


const keys = Object.keys(article);
const hasArticle = keys.includes("author");
console.log(hasArticle);