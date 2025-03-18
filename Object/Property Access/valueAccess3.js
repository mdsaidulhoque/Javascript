const cricketer = {
    position : 4,
    speciality : "batsman",
    age : 24,
    runs : 8000,

}
console.log(cricketer.position);
console.log(cricketer["runs"]);

cricketer.position = 1;
cricketer["runs"] = 9000;

console.log(cricketer.position);
console.log(cricketer["runs"]);


