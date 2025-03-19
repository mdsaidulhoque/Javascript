function addNum(a,b){
    let sum = 0;
    for(const num of arguments){
        sum = sum + num;
    };
    console.log(sum);
};
addNum(2,5,7,8);