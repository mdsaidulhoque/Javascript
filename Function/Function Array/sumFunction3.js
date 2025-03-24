function check(number){
    let maxNum = number[0];
    let minNum = number[1];
    if(maxNum > minNum){
        return minNum;
    }
    else if(minNum > maxNum){
        return maxNum;
    };
    
};
const arr = [20,45,78];
const result = check(arr);
console.log(result);