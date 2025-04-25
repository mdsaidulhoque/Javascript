const person = {name: "Rakib",
    age: 20,
    city: "Chittagong",
    student: true
}
const {name,city,...details} = person;
console.log(name);
console.log(city);
console.log(details);