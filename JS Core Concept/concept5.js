//Pass By Reference

function updateJob(person){
    person.job = "Web Designer";
    console.log("Inside function: ",person);
}

let employee = {job: "Web Developer"};

console.log("Before function call: ",employee);

updateJob(employee);

console.log("After function call: ",employee);

