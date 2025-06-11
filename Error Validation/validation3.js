// function fullName1(first,second){

//     const full = first + " " + second;

//     return full;

// }

// const name1 = fullName1("Saidul","Hoque");
 
// const name2 = fullName1("Saidul", 2);

// console.log(name1);

// console.log(name2);


//Validation is


function fullName2(first , second){

    if(typeof first !== "string"){

        return "First name should be String";

    }

    else if(typeof second !== "string"){

        return "Second name should be string";

    }

    const full = first + " " + second;

    return full;

}

const name3 = fullName2("Mir","Kashem");

const name4 = fullName2("Saim",2);

console.log(name3);

console.log(name4);
