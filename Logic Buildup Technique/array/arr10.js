function oddNumber(numbers){
    const newArr = [];
    for (const number of numbers){
        if (number % 2 === 1){
           const subNum = number - 1;
           newArr.push(subNum);
        }
    }
    return newArr;
}

const arr = [12,21,3,2,4324,5,3,211,213];
const result = oddNumber(arr);
console.log(result);