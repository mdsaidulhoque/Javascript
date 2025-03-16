const food = {
    name : "Pizza",
    price: 500,
    size: "Large",
}
Object.seal(food);
food.price = 600;
console.log(food);