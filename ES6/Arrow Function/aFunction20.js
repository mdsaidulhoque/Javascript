const add = (num1 = 10,num2 = 5) => num1 + num2;
const check = add(4,undefined);
const test = add(undefined,6);
console.log(check);
console.log(test);