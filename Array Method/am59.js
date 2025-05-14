const friends = [
    {name: "Tariq",age: 29},
    {name: "Sara",age: 22},
    {name: "Tariq",age: 35}
];
friends.sort((a,b) => a.age - b.age);
console.log(friends);