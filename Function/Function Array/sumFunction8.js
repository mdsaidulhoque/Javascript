function check(number){
    let multi = 1;
    for(const num of number){
        if(num % 3 === 0){
            multi *= num;
        };
    };
    return multi;
};
const arr = [1,4,6,9,11,3];
const result = check(arr);
console.log(result);