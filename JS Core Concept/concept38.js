function calculator(a,b,callback){
    const result = a + b;
    callback(result);
}

function printResult(value){
    console.log("Result is: ",value);
}

calculator(5,10,printResult);