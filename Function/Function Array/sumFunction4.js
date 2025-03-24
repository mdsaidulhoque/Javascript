function check(age){
    if(age < 18){
        return 18;
    }
    else if(age > 45){
        return 45;
    }
    else{
        return age;
    };
};
const result1 = check(16);
const result2 = check(46);
const result3 = check(32);
console.log(result1,result2,result3);
