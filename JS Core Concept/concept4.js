//Pass By Value

function changeValue(num){
    num = 20;

    console.log("Inside function: " ,num);
}

let x = 10;

console.log("Before function call: ",x);

changeValue(x);

console.log("After function call: ", x);
