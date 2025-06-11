// function multiply(num1,num2){

//     const mult = num1 * num2

//     return mult;
// }

// const result1 = multiply(5,"seven");

// const result2 = multiply([5,1],[4]);

// const result3 = multiply(5 + 7);

// console.log(result1,  result2,  result3);



//Validation is


function multiply1(num1 , num2){

    if(typeof num1 !== 'number'|| typeof num2 !=='number'){

        return "Please provide a number";

    }

    const mult = num1 * num2;

    return mult;
}

const result4 = multiply1(5,4);

const result5 = multiply1(6,"seven");

console.log(result4);

console.log(result5);