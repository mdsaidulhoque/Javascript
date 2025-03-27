function oddAverage(numbers){
    const odds = [];
    for (const number of numbers){
        if(number % 2 === 1){
            odds.push(number);
        }
        console.log(number);
    }
    console.log(odds);
}
const nums = [2,5,8,3,5,6];
oddAverage(nums);