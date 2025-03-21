const shirt = 450;
const pant = 800;
const panjabi = 1200;
const paijama = 300;
function add(price1,price2){
    return price1 + price2;
};
const bill1 = add(shirt,pant);
const bill2 = add(panjabi,paijama);
const total = add(bill1,bill2);
console.log(total);