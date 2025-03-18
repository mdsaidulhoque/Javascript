const profile = {
    name : "sayed",
    age : 21,
    city : "Chittagong",
}
for (const key in profile){
    const value = profile[key];
    console.log(key,value);
}