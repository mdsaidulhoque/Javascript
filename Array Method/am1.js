function doubleAll(numbers){
    const doubled = [];
    for(num of numbers){
        let value = num * 2;
        doubled.push(value)
    }
    return doubled
}
const number = [2,4,6,8];
const result = doubleAll(number);
console.log(result);