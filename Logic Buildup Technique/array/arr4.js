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

    const avg = sum / count;
    return avg;
}
const numbers = [23,45,2,54,654,2,43,54,65,56];
const average = oddsAverage(numbers);
console.log("Average of the odd numbers is:",average);