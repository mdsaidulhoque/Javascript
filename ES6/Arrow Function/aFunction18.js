const elements = numbers =>{
    const result = numbers[0] + numbers[numbers.length - 1];
    return result;
};
const newElements = elements([2,4,6,8,6]);
const check = newElements[newElements.length - 1];
console.log(check);