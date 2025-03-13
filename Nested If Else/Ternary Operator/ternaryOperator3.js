// const Shopping = 2800;
// if (Shopping > 3000){
//     Cashback = 500;
//     Shopping -= Cashback;
//     console.log(Shopping); 
// }
// else{
//     Cashback = 0;
//     Shopping -= Cashback;
//     console.log(Shopping);
// }

let Shopping = 3800;
let Cashback = Shopping > 3000 ? 500 : 0;

Shopping -= Cashback;
console.log(Shopping);
