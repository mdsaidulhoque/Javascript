function add(num1 = 0, num2 = 0){
    const result = num1 + num2;
    console.log(num1,num2,result);
    return result;
}
const sum = add();
console.log(sum);
const total = add(4,6);
console.log(total);