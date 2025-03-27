function isLeapYear(year){
    if(year % 4 === 0){
        return true;
    }
    else{
        return false;
    }
}
const isLeap1 = isLeapYear(2024);
const isLeap2 = isLeapYear(2045);
console.log(isLeap1," ",isLeap2);