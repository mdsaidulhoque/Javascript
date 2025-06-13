function printSecond(numbers){

    if(Array.isArray(numbers) == false){

        return "Please provide an Array";
    }

    const second = numbers[1];

    return second;
}

const arr = [2,4,6,8];

const getSecond1 = printSecond(arr);

console.log(getSecond1);

const getSecond2 = printSecond(1);

console.log(getSecond2);