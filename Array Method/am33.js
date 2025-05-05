//Revise

//some method

const marks1 = [32,45,76,49,83,54];
const hasPassed1 = marks1.some(pass => pass > 50);
console.log(hasPassed1);

//every method

const marks2 = [32,45,76,49,83,54];
const hasPassed2 = marks2.every(pass => pass > 50);
console.log(hasPassed2);

const marks3 = [52,55,76,69,83,54];
const hasPassed3 = marks3.every(pass => pass > 50);
console.log(hasPassed3);

//flat method

const nested = [1,5,[3,5,[7,2]]];
const flattened = nested.flat(2);
console.log(flattened);