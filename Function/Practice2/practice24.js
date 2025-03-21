function check(age){
    if(age > 18){
        return "Eligible For Voting";
    }
    else{
        return "Not Eligible";
    };
};
const checkIn = check(21);
console.log(checkIn);