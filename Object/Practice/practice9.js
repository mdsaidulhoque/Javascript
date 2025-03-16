const Building =  {
    floors: 10,
    address: {street : "Main Road",city: "Dhaka"},
    type: "Commercial"

}
for(const key in Building){
    const value = Building[key];
    console.log(key,value);
}