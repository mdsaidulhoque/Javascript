const doMath = (x,y,z = 1) => {
    const sum = x + y + z;
    const mul = x * y * z;
    const result = sum + mul;
    return result
}
const math = doMath(2,4);
console.log(math);