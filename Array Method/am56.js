const friends = [
    {name: "Zara",age: 25},
    {name: "Bob",age: 20},
    {name: "Anna",age: 30}
];
friends.sort((a,b) => a.age - b.age);
console.log(friends);