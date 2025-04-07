function product(info = {price: 10,quantity: 1}){
    return info;
}
const details = product({
    price: 10,
    quantity: 6,
});
console.log(details);