function check(number){
    let sum = 0;
    for(const num of number){
        if(num < 0){
         sum += num;
        };
    };
    return sum;
    
};
const arr = [2,4,-5,7,-8,-32,-45];
const result = check(arr);
console.log(result);