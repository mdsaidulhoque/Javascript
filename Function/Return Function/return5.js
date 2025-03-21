function doMath(num1,num2){
    const sum = num1 + num2;
    const diff = num1 - num2;
    const multi = sum * diff;
    const div = multi / 2;
    return div;
};
const result = doMath(10,5);
console.log(result);