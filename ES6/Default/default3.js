function add(num1 = 0, num2 = 0, num3 = 0){
    const result = num1 + num2 + num3;
    console.log(num1,num2,num3,result);
    return result;
}
const sum = add();
console.log(sum);