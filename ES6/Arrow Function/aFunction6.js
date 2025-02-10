const doMath = (x,y,z) => {
    const sum = x + y + z;
    const mul = x * y * z;
    const result = sum + mul;
    return result
}
const math = doMath(1,2,4);
console.log(math);