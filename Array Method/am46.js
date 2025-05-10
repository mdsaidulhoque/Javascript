const number = [10,20,30,40,50];
const max = number.reduce((accumulator ,currentValue) => {
    return accumulator > currentValue ? accumulator : currentValue;
});
console.log(max);
