const computer = {
    brand : "lenovo",
    price : 35000,
    processor:"intel",
    ssd: "512gb",
}
const keys = Object.keys(computer);
const propertyCheck = keys.includes("brand");
console.log(propertyCheck);