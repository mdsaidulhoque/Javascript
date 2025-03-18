const profile = {
    name: "sayed",
    age : 21,
    city: "Chittagong",
};
const keys = Object.keys(profile);
for (const key of keys){
    console.log(key, profile[key]);
}