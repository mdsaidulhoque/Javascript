function oddsAverage(numbers){
    const odds = [];
    for (const number of numbers){
        if(number % 2 === 1){
            odds.push(number);
        }
        
    }
    let sum = 0;
    for( const number of odds){
        sum += number;
    }
    console.log(sum);
}
const nums = [2,6,3,,9,15,23,7,6,5];
const average = oddsAverage(nums);
