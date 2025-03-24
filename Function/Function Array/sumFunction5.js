function check(number){
    const div = number[1];
    let sum = 0;
    for (const nums of number){
        if(nums % div === 0){
            sum = sum + nums;
        };

    };
    return sum;
};
const arr = [2,4,5,7,8,32,45];
const result = check(arr);
console.log(result);