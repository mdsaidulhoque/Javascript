const products = [{name: "shampoo",price: 100},
   {name: "soap", price: 50},
   {name: "toothpaste",price: 75}
];
const priceTotal = products.reduce((accumulator,currentValue) => accumulator + currentValue.price , 0);
console.log(priceTotal);