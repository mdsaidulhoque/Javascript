function printArr(elements){

    if(Array.isArray(elements) == false){

        return "Please provide an Array";
    }

    const last = elements[elements.length - 1];

    return last;
}

const arr = [2,4,6,8];

const result1 = printArr(arr);

console.log(result1);

const result2 = printArr(20);

console.log(result2);