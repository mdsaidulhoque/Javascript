const person = {name: "Abdur Rahim",
    city: "Chittagong"
}
const {name,city,phone = "N/A"} = person;
console.log(name,city,phone);