const products = [
    {id: 1,name: "Lenovo",price: 65000},
    {id: 2,name: "dell",price: 45000},
    {id: 3,name: "hp",price: 40000},
    {id: 4,name: "mac",price: 65000}
];
const Price = products.map(p => p.price);
console.log(Price);