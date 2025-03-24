function sumOfNumbers(numbers){
    let sum = 0 ;
    for (const number of numbers){
        if(number % 2 === 0) {
        sum = sum + number;
       }
    };
    return sum;
};
const nums = [1,3,5,7,9,2,54,4,6,8];
const result = sumOfNumbers(nums);
console.log("sum of numbers:",result);