const animal = {
    name: "Tiger",
    location: "Sundarban",

}
Object.freeze(animal);
animal.name = "Lion";
animal.location = "Zoo";
console.log(animal);
