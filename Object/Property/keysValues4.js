const computer = {
    brand : "lenovo",
    price : 35000,
    processor:"intel",
    ssd: "512gb",
}
if ("brand" in computer){
    console.log("brand exist");
}
else{
    console.log("No brand,no good quality")
}