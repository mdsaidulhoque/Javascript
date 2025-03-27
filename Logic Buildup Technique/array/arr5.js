function oddsAverage(numbers){
    const odds = [];
    for (const number of numbers){
        if(number % 2 === 1){
            odds.push(number);
        }
    }
    let sum = 0;
    for (const num of odds){
        sum += num;
    }
    const count = odds.length;
    if(count === 0){
        return 0;
    }
    
    const avg = sum / count;
    return avg;
    
}

const numbers = [26,42,454,32,32,54,54];
const average = oddsAverage(numbers);
console.log("Average of the odd number is:",average);