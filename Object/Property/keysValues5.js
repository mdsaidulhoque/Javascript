const computer = {
    brand : "lenovo",
    price : 35000,
    processor:"intel",
    ssd: "512gb",
}
if (computer.hasOwnProperty("email")){
    console.log("Email exist");
}
else{
    console.log("No email,no spam");
}