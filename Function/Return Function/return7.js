function isOddNumber(num){
    if(num % 2 === 1){
        return true;
    }
    else{
        return false;
    };
};
const odd1 = isOddNumber(1120);
const odd2 = isOddNumber(105);
console.log(odd1,odd2);