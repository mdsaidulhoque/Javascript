const elements = numbers => numbers;
const newElements = elements([2,4,6,8,6]);
const check =newElements[0] + newElements[newElements.length - 1];
console.log(check);