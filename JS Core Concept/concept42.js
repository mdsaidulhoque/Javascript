function numberProcessor(num,callback){
    const div = num / 5;
    callback(div);
}

function divitionByFive(value){
    console.log("The answer is: ",value);
}

numberProcessor(125,divitionByFive);