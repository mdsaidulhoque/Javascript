const student = {
    name: "sayed",
    age:21
}
const getName = person => person.name;
const getAge = person => person.age;
const sName = getName(student);
console.log(sName);
const sAge = getAge(student);
console.log(sAge);