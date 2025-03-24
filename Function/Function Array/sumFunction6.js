function check(num){
    if(num < 20){
        return num*2;
    }
    else{
        return num/20;
    };
};
const result1 = check(15);
const result2 = check(50);
console.log(result1,result2);