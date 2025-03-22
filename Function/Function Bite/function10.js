function inp(num1,num2){
    const check = num1 * num2;
    if(check > 100){
        return check/2;
    }
    else{
        return check;
    };
};
const result1 = inp(30,4);
const result2 = inp(15,4);
console.log(result1,result2);