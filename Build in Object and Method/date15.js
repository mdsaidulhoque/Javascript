const date = new Date("2029-02-16");

const day = date.getDay();

// console.log(day);

if(day === 0){

    console.log("Sunday");

}

else if(day === 1){

    console.log("Monday");

}

else if(day === 2){

    console.log("Tuesday");

}

else if(day === 3){

    console.log("Wednesday");

}

else if(day === 4){

    console.log("Thursday");

}

else if(day === 5){

    console.log("Friday");

}

else{

    console.log("Saturday");
}