function isLeapYear(year){
    if(year % 400 === 0){
        return true;
    }
    else if(year % 400 !== 0 && year % 100 === 0){
        return false;
    }
    else if (year % 4 === 0){
       return true;
    }
    else{
        return false;
    }
};
const isLeap1 = isLeapYear(2200);
const isLeap2 = isLeapYear(2000);
const isLeap3 = isLeapYear(2024);
console.log(isLeap1," ", isLeap2 , " ", isLeap3);