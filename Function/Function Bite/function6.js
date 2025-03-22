function inp(number){
    if(number > 10){
        return number/10;
    }
    else{
        return number*10;
    };
};
const numInp = inp(15);
const numberInp = inp(8);
console.log(numInp,numberInp);