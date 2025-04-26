const product = {name:"Laptop",
    price: 50000,
    brand: "Dell"
}
const {name,...rest} = product;
console.log(rest);