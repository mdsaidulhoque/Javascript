function returnOE(numbers){
    const arr = [];
    for (const number of numbers){
        if(number % 2 === 1){
            arr.push(number);
        }
    }
    if (arr.length === 0){
        return "No odd numbers found";
    }
    else{
        return "Odd numbers found";
    }
}

const arr1 = [1,2,3,4,5,6,7,8,9];
const result = returnOE(arr1);
console.log(result);