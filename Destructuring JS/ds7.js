const person = {name: "Sayed",
    roll: 190
}
const{name,subject = "Mathmatics"} = person;
console.log(name);
console.log(subject);