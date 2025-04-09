function arr(mul = [5,10,15]){
    let result = [];
    for(let i in mul){
        result[i] = mul[i] * 2;
    }
    return result;
}
const newArr = [2,5,8,1,3,9];
const result = arr(newArr);
console.log(result);
