let language = {
    name: "JS",
    age: 30
};

let newVersion = language;

console.log(language, newVersion);

let key = "location";

newVersion[key] = "Browser";


console.log(language, newVersion);
