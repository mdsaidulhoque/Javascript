function evenSizedString(str){
    const size = str.length;
    if(size % 2 === 0){
        return true;
    }
    else{
        return false;
    };
};
const isEven = evenSizedString("Name");
console.log(isEven);