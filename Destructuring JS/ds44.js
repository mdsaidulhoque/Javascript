const young = {name: "Arif",
    age:30,
    country: "B Baria"
}
const {country,...clonedObj} = young;
console.log(clonedObj);