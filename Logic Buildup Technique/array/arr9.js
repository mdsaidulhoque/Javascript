function oddAverage(numbers){
    const odds = [];
    for (const number of numbers){
        if (number % 2 === 1){
            odds.push(number);
        }
    }
    let sum = 0;
    for (const number of odds){
        sum += number;
    }
    const avg = sum / odds.length;
    return avg.toFixed(2);
}

const arr = [1,2,3,4,5,6,7,8,9,11,13,17,19];
const result = oddAverage(arr);
console.log(result);