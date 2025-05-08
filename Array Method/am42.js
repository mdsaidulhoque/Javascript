const arr = [5,10,15,20,25];
const add = arr.reduce((accumulator,currentValue) => accumulator + currentValue, 0); // 0 = initial value
console.log(add);