const headphone = {
    brand : "Sony",
    color: "red",
    price: 3000

}
Object.freeze(headphone);
headphone.price = 4000;
console.log(headphone);