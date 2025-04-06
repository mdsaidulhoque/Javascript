function oddAverage(num){
    const odds = [];
    for (const number of num){
        if(number % 2 === 0){
            odds.push(number);
        }
    }
    let sum = 0;
    for (const number of odds){
        sum += number;
    }
    const avg = sum / odds.length;
    return avg;
}
const number1 = [2,4,5,7,8,12];
const avg1 = oddAverage(number1);
console.log("Average of the odd number is :",avg1);