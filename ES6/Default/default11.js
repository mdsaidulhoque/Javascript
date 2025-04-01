function product(info = {}){
    const result = {price: 10,quantity: 1}
    return {...result,...info};
}
const details = product({
    quantity: 6,
});
console.log(details);