function numberOfElement(num){
    const size = num.length;
    if(size % 2 === 0){
        return "oddNumber";
    }
    else{
        return "evenNumber";
    };
     
};
const size = numberOfElement([1,2,4,7,3,54,54,3]);
console.log(size);