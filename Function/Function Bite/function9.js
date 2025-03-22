function take(name1,name2){
    const len1 = name1.length;
    const len2 = name2.length;
    if(len1 > len2){
        return true;
    }
    else{
        return false;
    };

};
const result = take("Saidul","Islam");
console.log(result);