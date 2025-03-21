function insert(num){
    if(num % 13 === 0){
        return true;
    }
    else{
        return false;
    };
};
const checkIn = insert(273);
console.log(checkIn);