function inp(numbers){
    let sum = 0;
    for (const num of numbers){
        if(num % 2 === 1){
            sum = sum + num;
        };
     
    };
    return sum;
};
const Nums = [5,15,8,7];
const result = inp(Nums);
console.log(result);