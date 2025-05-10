const list = [{name: "Pen", price: 5},
   { name: "Book", price: 50},
   {name: "Bag",price: 100}
];
const priceTotal = list.reduce((accumulator,currentValue) => accumulator + currentValue.price, 0);
console.log(priceTotal);
