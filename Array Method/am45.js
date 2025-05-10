const numbers = [1,2,3,4,5];
const mult = numbers.reduce((accumulator,currentValue) => accumulator * currentValue,1);
console.log(mult);