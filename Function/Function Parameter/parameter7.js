function addNumber(a,b){
    console.log(arguments);
    return a + b;
};
const result = addNumber(2,4,6,7);
console.log(result);