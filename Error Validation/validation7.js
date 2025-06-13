function printName(name){

    if(typeof name !== "string"){

        return "Please provide an String";
    }

    const firstLetter = name[0];

    return firstLetter;
}

const result1 = printName("Saim");

console.log(result1);

const result2 = printName(5);

console.log(result2);