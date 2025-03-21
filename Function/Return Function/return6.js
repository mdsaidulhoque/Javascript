function isEvenNumber(num){
    if(num % 2 === 0){
        return true;
    }
    else{
        return false;
    };
};
const even1 = isEvenNumber(1120);
const even2 = isEvenNumber(105);
console.log(even1,even2);